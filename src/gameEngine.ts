// shared/gameEngine.ts

import {
    GameState,
    PlayCardPayload,
    DrawPayload,
    CardParams,
    EventResult,
    EventFailure,
    DirectAttackPayload,
    MinionAttackPayload,
    PlayerState,
    ChangePositionPayload,
    ManaBoostPayload,
    CardType,
    Keyword,
    ServerRequest,
    RerollPayload,
    EventType,
    SubType
} from '../shared/interfaces';
import { gameRules } from '../shared/gameRules';
import { Card } from '../shared/Card';
import { cardCanBePlayed, Unit, unitsCanBattle } from '../shared/validations';
import { EffectType } from '../shared/Effect';
import { cardEffects, drawCard, getActiveEffects } from './data/cardEffects';

import { useEffect } from './game/effects/useEffect';
import { applyDirectDamage, applyPostAttackState, getPlayersFromState, handleUnitDeath } from './game/gameUtils';
import { StatusCondition } from '../shared/Card';
import { EffectTriggered, SideEffect, SideEvent } from '../shared/interfaces';
const { activateEffect } = useEffect();

type BattleResult = EventResult<{
    state: GameState;
    attacker: Card;
    defender?: Card;
    destroyedMinionIds?: string[];
    damage?: number;
    type?: EventType
}>;


/**
 * Always‐succeeds draw. Returns new state.
 */
export function draw(
    state: GameState,
    { playerId, amount = 1 }: DrawPayload
): EventResult<{ state: GameState }> {
    const st = structuredClone(state);
    const [player, opponent] = getPlayersFromState(st, playerId);
    drawCard(player, amount);

    return { success: true, state: st };
}

export function reroll(
    state: GameState,
    { playerId, rerolledCardId }: RerollPayload
): EventResult<{ state: GameState, rerolledCardId: string }> {
    const st = { ...state };
    const p = st.players[playerId];

    if (p.mana <= 0) {
        return { success: false, reason: 'Not enough mana' };
    }
    if (!p.canReroll) {
        return { success: false, reason: 'You can only reroll once per turn' };
    }


    const rerolledCard = p.hand.find(card => {
        if (card) {
            return card.instanceId == rerolledCardId;
        }
        return false;
    })

    if (!rerolledCard) {
        return { success: false, reason: 'Card not found' };
    }

    p.hand = p.hand.filter(card => card.instanceId !== rerolledCard.instanceId);
    p.deck.push(rerolledCard);
    p.mana = Math.max((p.mana - 1), 0);
    p.canReroll = false;
    drawCard(p, 1);

    return { success: true, state: st, rerolledCardId: rerolledCard.instanceId };
}


export function playCard(
    state: GameState,
    { playerId, cardId }: PlayCardPayload
): EventResult<{ card: Card }> {
    const st = structuredClone(state);
    const [player, opponent] = getPlayersFromState(st, playerId);

    if (st.turnPlayerId !== playerId) {
        return { success: false, reason: 'Not your turn' };
    }

    // 🧠 Extract first so we can use it after validation
    const idx = player.hand.findIndex(c => c.instanceId === cardId);
    if (idx === -1) {
        return { success: false, reason: 'Card not in hand' };
    }

    const card = player.hand[idx];

    // ✅ Run validator using extracted values
    const validated = cardCanBePlayed(player, card.instanceId);
    if (!validated.success) {
        return { success: false, reason: validated.reason ?? '' };
    }

    // 🟢 All checks passed → play the card
    player.hand.splice(idx, 1);


    if (card.type === CardType.MINION || card.subtype == SubType.CONTINOUS) {
        player.board.push(card);
    }

    player.mana -= card.cost;
    const result = activateEffect(card, EffectType.ON_PLAY, [player, opponent]);


    const successRes: EventResult<{}> = {
        success: true,
        state: st,
    };


    if (!card.keywords.includes(Keyword.RUSH)) {
        card.isActive = false;
    }

    if (card.type == CardType.MINION == card.keywords.includes(Keyword.IMMOBILE)) {
        card.isHorizontal = true;
    }

    const triggeredSideEffect: EffectTriggered = {
        cardId: card.instanceId,
        type: SideEvent.EFFECT_TRIGGERED
    };

    const sideEvents = result && 'effectTriggered' in result ? [triggeredSideEffect] : [];


    if (result && 'targetSelectionRequest' in result) {
        return {
            ...successRes,
            card,
            waitForClient: result.targetSelectionRequest,
            sideEvents
        };
    }

    return { success: true, state: st, card, sideEvents };
}


/**
 * Always‐succeeds turn pass. Advances turn, refills mana, and readies units.
 */
export function passTurn(
    state: GameState
): EventResult<{ drawnCard: Card | undefined }> {
    const st = structuredClone(state);
    const [player, opponent] = getPlayersFromState(st, st.turnPlayerId);

    st.turnNumber++;
    // switch active player
    st.turnPlayerId = Object.keys(st.players).find(id => id !== st.turnPlayerId)!;

    // increment global turn only after both players have gone
    const isSecondPlayer = st.turnPlayerId !== st.startingPlayerId;
    if (isSecondPlayer) st.globalTurn++;


    // refill mana and ready units
    const active = opponent;

    player.board.forEach(u => {
        u.statusConditions = u.statusConditions.filter(sc => sc !== StatusCondition.CHAINED);
    });

    active.mana = Math.min(st.globalTurn, gameRules.MAX_MANA);
    active.board.forEach(u => {
        u.isActive = true;
        if (!u.keywords.includes(Keyword.IMMOBILE)) {
            u.isHorizontal = false;
        }
        u.attacksCounter = 0;
    });

    active.canReroll = true;



    player.board.forEach(unit => {

        if (unit.attack && unit.defense && unit.boostedByMana) {
            unit.attack = Math.max(unit.attack - unit.boostedByMana, 1);
            unit.defense = Math.max(unit.defense - unit.boostedByMana, 1);
        }

        unit.boostedByMana = 0;

        activateEffect(unit, EffectType.ON_PASS, [player, opponent]);
    })

    if (active.shieldBroken) {
        active.shield = false;
    }



    let drawnCard
    if (active.deck.length > 0) {
        drawCard(active);
    }

    return { success: true, state: st, drawnCard };
}

/**
 * Direct attack: already returning an EventResult<{ state; attackingCard; damage }>
 */
export function directAttack(
    state: GameState,
    { playerId, cardId: attackingCardId, room }: DirectAttackPayload
): BattleResult {


    const st = structuredClone(state);
    const [player, opponent] = getPlayersFromState(st, playerId);

    if (!opponent) {
        return { success: false, reason: 'No opponent found' };
    }
    const idx = player.board.findIndex(c => c.instanceId === attackingCardId);
    if (idx === -1) {
        return { success: false, reason: 'Card not on board' };
    }

    const card = player.board[idx];
    if (!card.isActive || card.isHorizontal) {
        return { success: false, reason: 'Card has already attacked' };
    }

    if (card.keywords.includes(Keyword.DUELIST)) {
        return { success: false, reason: 'Duelists can only attack other units.' };
    }

    if (opponent.board.some(c => c.isHorizontal)) {
        return { success: false, reason: "You must attack the units in defense position first" };
    }

    if (card.keywords.includes(Keyword.Cowardly) && !player.board.some(unit => unit.isHorizontal)) {
        return { success: false, reason: "Cowardly units can only attack if you control an unit in defense position" };
    }

    if (card.statusConditions.includes(StatusCondition.CHAINED)) {
        return {
            success: false,
            reason:
                `${card.name} is chained`,
        };
    }

    //Heroic spirit

    const heroicSprit = opponent.hand.find((unit => unit.keywords.includes(Keyword.HEROIC_SPIRIT)));

    if (heroicSprit && opponent.mana >= heroicSprit.cost) {
        opponent.board.push(heroicSprit);
        opponent.mana -= heroicSprit.cost;
        heroicSprit.isHorizontal = true;
        console.log(heroicSprit.name, opponent.board.map(u => u.name).join(','))
        const MinionAttackPayload: MinionAttackPayload = {
            eventType: EventType.APPLY_MINION_ATTACK,
            attackingMinionId: card.instanceId,
            defendingMinionId: heroicSprit.instanceId,
            room,
            playerId
        }
        return minionAttack(st, MinionAttackPayload);
    }



    applyDirectDamage(opponent, player);

    applyPostAttackState(card);
    activateEffect(card, EffectType.ON_ATTACK, [player, opponent],);
    //player.board[idx] = card;

    return {
        success: true,
        state: st,
        attacker: card,
        damage: 1,
        type: EventType.DIRECT_ATTACK
    };
}

export function minionAttack(state: GameState, payload: MinionAttackPayload): BattleResult {
    const { attackingMinionId, defendingMinionId, playerId } = payload;
    const st = structuredClone(state);
    const [player, opponent] = getPlayersFromState(st, playerId);


    const attacker = player.board.find(c => c.instanceId == attackingMinionId);
    const defender = opponent.board.find(c => c.instanceId == defendingMinionId);

    if (!attacker || !defender) {
        return { success: false, reason: 'One of the targets is not on the board' };
    }

    if (!attacker.attack || !defender.defense || !attacker.defense || !defender.attack) {
        return { success: false, reason: 'Only units are allowed to attack' };
    }

    const validated = unitsCanBattle(attacker as Unit, defender as Unit, [player, opponent]);


    if (!validated.success) {
        return {
            success: false,
            reason: validated.reason ?? ''
        }
    };


    activateEffect(attacker, EffectType.ON_ATTACK, [player, opponent], defender);
    activateEffect(defender, EffectType.ON_DEFEND, [player, opponent], defender);



    if (!attacker.keywords.includes(Keyword.FEARLESS)) {
        attacker.defense -= defender.attack;
    }

    defender.defense -= attacker.attack;

    applyPostAttackState(attacker);
    if (attacker.keywords.includes(Keyword.LIFESTEAL)) {
        player.lifePoints += 1;
    }

    const destroyedMinionIds: string[] = [];
    const destroyedMinions: Card[] = [];

    for (const unit of [attacker, defender]) {

        activateEffect(unit, EffectType.AFTER_COMBAT, [player, opponent]);

        if (unit.defense! <= 0) {
            handleUnitDeath(unit, player, opponent, destroyedMinionIds, true);
        }
    }



    if (destroyedMinionIds.includes(defender.instanceId)) {

        activateEffect(attacker, EffectType.ON_KILL, [player, opponent]);
    }

    return {
        success: true,
        state: st,
        destroyedMinionIds,
        attacker: attacker,
        defender: defender,

    };

}

export function changePosition(
    state: GameState,
    payload: ChangePositionPayload
): EventResult<{ state: GameState, card?: Card }> {

    const { cardId, playerId } = payload;
    const st = structuredClone(state);
    const [player, opponent] = getPlayersFromState(st, playerId);
    const card = player.board.find(c => c.instanceId == cardId);


    if (!card) {
        return { success: false, reason: 'Card not found on the board' };
    }
    const effects = getActiveEffects(card.name, player.bloodThirst)

    const onTapEffect = effects.find(eff => eff.type == EffectType.ON_TAP);


    if (card.isActive && !onTapEffect) {
        return { success: false, reason: 'You can only switch the position of inactive units' };
    }

    if (card.isHorizontal) {
        return { success: false, reason: 'Your minion is already defending...' };
    }

    if (card.keywords.includes(Keyword.HONORLESS)) {
        return { success: false, reason: 'Honorless units cannot defend' };
    }

    if (card.keywords.includes(Keyword.IMMOBILE)) {
        return { success: false, reason: 'Immobile units cannot change their position' };
    }

    if (card.statusConditions.includes(StatusCondition.CHAINED)) {
        return {
            success: false,
            reason:
                `${card.name} is chained`,
        };
    }



    card.isHorizontal = true;

    const result = activateEffect(card, EffectType.ON_TAP, [player, opponent]);

    const triggeredSideEffect: EffectTriggered = {
        cardId: card.instanceId,
        type: SideEvent.EFFECT_TRIGGERED
    };

    const sideEvents = result && 'effectTriggered' in result ? [triggeredSideEffect] : [];

    const successRes: EventResult<{}> = {
        success: true,
        state: st,
        sideEvents
    };


    if (result && 'targetSelectionRequest' in result) {
        return {
            ...successRes,
            state: st,
            card,
            waitForClient: result.targetSelectionRequest,
            sideEvents
        };
    }

    return successRes;
}
export function resolveTargetSelection(
    state: GameState,
    payload: ManaBoostPayload
): EventResult<{ state: GameState }> {

    const { cardId, playerId } = payload;
    const st = structuredClone(state);
    const [player] = getPlayersFromState(st, playerId);


    const card = player.board.find(c => c.instanceId == cardId);

    return {
        success: true,
        state: st,

    };
}
export function manaBoost(
    state: GameState,
    payload: ManaBoostPayload
): EventResult<{ state: GameState }> {

    const { cardId, playerId } = payload;
    const st = structuredClone(state);
    const [player] = getPlayersFromState(st, playerId);
    const card = player.board.find(c => c.instanceId == cardId);
    if (!card) {
        return { success: false, reason: 'Card not found on the board' };
    }
    if (player.mana == 0) {
        return { success: false, reason: "You don't have enough mana!" };
    }

    if (!card.attack || !card.defense) {
        return { success: false, reason: "You can only boost units.." };
    }
    if (!card.isActive || card.isHorizontal) {
        return { success: false, reason: "You should only boost units that are ready to attack..." };
    }

    card.attack += 1;
    card.defense += 1;
    card.boostedByMana += 1;
    player.mana -= 1;

    return {
        success: true,
        state: st,
    };
}



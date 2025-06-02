import { randomUUID } from "crypto";
import { Card } from "../../shared/Card";
import { EffectType } from "../../shared/Effect";
import { CardType, Color, GameState, Keyword, PlayerState, StatKey } from "../../shared/interfaces";

import { useEffect } from '../game/effects/useEffect';
const { activateEffect } = useEffect();


export function diceRoll(): number {
    const roll1 = Math.floor(Math.random() * 6);
    const roll2 = Math.floor(Math.random() * 6);
    return roll1 >= roll2 ? 0 : 1;
}

export function shuffle<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export const getPlayersFromState = (st: GameState, playerId: string): PlayerState[] => {
    const player = st.players[playerId];
    const opponentId = Object.keys(st.players).find(id => id !== playerId);
    if (!opponentId) throw new Error;
    const opponent = st.players[opponentId];
    return [player, opponent];
}

export const applyDirectDamage = (damagedPlayer: PlayerState, attackingPlayer: PlayerState, damage: number = 1) => {
    damagedPlayer.lifePoints = Math.max(damagedPlayer.lifePoints - damage, 0);
    // BT Trigger
    if (damagedPlayer.lifePoints <= 4) {
        damagedPlayer.bloodThirst = true;
        attackingPlayer.bloodThirst = true;
        /*TODO - 
            ON BT
        */


    }
    if (damagedPlayer.lifePoints <= 0 && damagedPlayer.shield) {
        damagedPlayer.shieldBroken = true;
        damagedPlayer.lifePoints = 1;
    }


}

export function handleUnitDeath(unit: Card, player: PlayerState, opponent: PlayerState, destroyedMinionIds: string[], byBattle: boolean = false, killer?: Card) {
    // Run ON_DEATH effect


    // BERSERKER: prevent death
    if (unit.keywords.includes(Keyword.BERSERKER) && byBattle) {
        unit.defense = 1;
        unit.keywords = unit.keywords.filter(k => k !== Keyword.BERSERKER);
        return;
    }

    // Mark for destruction
    destroyedMinionIds.push(unit.instanceId);

    const owner = unit.ownerId === player.id ? player : opponent;

    // Remove from board
    owner.board = owner.board.filter(c => c.instanceId !== unit.instanceId);


    // Add to graveyard
    owner.graveyard.push(unit);

    activateEffect(unit, EffectType.ON_DEATH, getEffectContext(unit, player, opponent));
    if (byBattle && killer) {
        activateEffect(unit, EffectType.ON_BATTLE_DEATH, [player, opponent], killer);
    }


    //TRIGGER ON_ALLY_DEATH effects

    owner.board.forEach(c => {
        activateEffect(c, EffectType.ON_ALLY_DEATH, getEffectContext(c, player, opponent), unit);
    })

    // BONESKIN resurrection
    if (unit.keywords.includes(Keyword.BONESKIN)) {

        const token = generateToken();
        owner.board.push(token);

        /*LINK - 
         unit.keywords = unit.keywords.filter(k => k !== Keyword.BONESKIN);
        unit.defense = 1;


        owner.graveyard = owner.graveyard.filter(c => c.instanceId !== unit.instanceId);
        owner.board.push(unit);
        unit.rebornedByBoneskin = true;
        */

    } else {
    }
    resetUnit(unit);
}


export function targetWithHighestStat(zone: Card[], stat: StatKey): Card | null {
    return zone.reduce((highest: Card | null, unit: Card) => {
        const statValue = unit[stat];
        const currentHighest = highest?.[stat];

        if (statValue == null) return highest;
        if (highest == null || (currentHighest == null) || statValue > currentHighest) {
            return unit;
        }

        return highest;
    }, null);
}

export function targetWithLowestStat(zone: Card[], stat: StatKey): Card | null {
    return zone.reduce((lowest: Card | null, unit: Card) => {
        const statValue = unit[stat];
        const currentLowest = lowest?.[stat];

        if (statValue == null) return lowest;
        if (lowest == null || currentLowest == null || statValue < currentLowest) {
            return unit;
        }

        return lowest;
    }, null);
}

export function applyPostAttackState(attacker: Card): void {
    attacker.attacksCounter++;

    const maxAttacks = attacker.keywords.includes(Keyword.DOUBLE_ATTACK) ? 2 : 1;

    if (attacker.attacksCounter >= maxAttacks) {
        attacker.isActive = false;
        if (!attacker.keywords.includes(Keyword.HONORLESS)) {
            attacker.isHorizontal = true;
        }
    }
}

function getEffectContext(card: Card, player: PlayerState, opponent: PlayerState): [PlayerState, PlayerState] {
    return card.ownerId === player.id ? [player, opponent] : [opponent, player];
}



export function resetUnit(unit: Card) {

    unit.attack = unit.originalAttack;
    unit.defense = unit.originalDefense;
    unit.cost = unit.originalCost;
    unit.keywords = unit.originalKeywords;
    unit.rebornedByBoneskin = false;
    unit.isHorizontal = false;
    unit.isActive = false;
    unit.attacksCounter = 0;

    return unit;

}

export function generateToken(): Card {
    const tokenParams = {
        templateId: "token",
        instanceId: crypto.randomUUID(),
        name: "Token",
        image_url: "", // or a placeholder image URL
        attack: 1,
        originalAttack: 1,
        defense: 1,
        originalDefense: 1,
        cost: 1,
        originalCost: 1,
        color: Color.WHITE,
        type: CardType.MINION,
        subtype: null,
        isHorizontal: false,
        boostedByMana: 0
    };

    return new Card(tokenParams);
}
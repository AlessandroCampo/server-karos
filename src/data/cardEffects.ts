
import { Card, StatusCondition } from "../../shared/Card";
import { Effect } from "../../shared/Effect";
import { EffectType } from "../../shared/Effect";
import { CardType, EventType, GameState, PlayerState } from "../../shared/interfaces";
import { draw } from "../gameEngine";
import { applyDirectDamage, getPlayersFromState, handleUnitDeath } from "../game/gameUtils";
import { controlsAnotherMinion, controlsMinionWithNameFragment, isCardTapped } from "../../shared/conditions";
import red, { redEffects } from "./effects/red";
import { gameRules } from "../../shared/gameRules";
import { blackEffects } from "./effects/black";
import { useEffect } from "../game/effects/useEffect";

const { activateEffect } = useEffect();


interface stats {
    attack: number,
    defense: number
}

export const dealDamage = (target: Card, [player, opponent]: PlayerState[], amount: number = 1): { killedUnit: Card } | null => {
    if (!target.defense) {
        return null;
    }
    target.defense -= amount;
    if (target.defense <= 0) {
        handleUnitDeath(target, player, opponent, [target.instanceId], false);
        return {
            killedUnit: target
        }
    }
    return null;
}

export const cardCanAttackAgain = (card: Card) => {
    card.isActive = true;
    card.isHorizontal = false;
    card.attacksCounter = 0;

}

export const dealRandomDamageToOpponentUnit = (condition: (unit: any) => boolean, [player, opponent]: PlayerState[], activatorCard: Card, amount = 1) => {


    const validTargets = opponent.board.filter(condition);
    if (validTargets.length === 0) return;

    const randomIdx = Math.floor(Math.random() * validTargets.length);
    const randomTarget = validTargets[randomIdx];

    dealDamage(randomTarget, [player, opponent], amount);

    // Remove from graveyard and add to board

}

export const destroyRandomOppponentUnit = (condition: (unit: any) => boolean, [player, opponent]: PlayerState[], activatorCard: Card, amount = 1) => {


    const validTargets = opponent.board.filter(condition);
    if (validTargets.length === 0) return;

    const randomIdx = Math.floor(Math.random() * validTargets.length);
    const randomTarget = validTargets[randomIdx];

    handleUnitDeath(randomTarget, player, opponent, [randomTarget.instanceId]);

    // Remove from graveyard and add to board

}


export const inflictDamageAoe = ([player, opponent]: PlayerState[], activator: Card, amount = 1, includeSelf = false, includeOwnField = false): Card[] => {

    const destroyedUnits: Card[] = [];

    opponent.board.forEach(card => {
        const damageResult = dealDamage(card, [player, opponent], amount);
        if (damageResult?.killedUnit) {
            destroyedUnits.push(damageResult.killedUnit);
        }
    })

    console.log(destroyedUnits.map(el => el.name).join(','));

    if (includeOwnField) {
        player.board.forEach(card => {
            const damageResult = dealDamage(card, [player, opponent], amount);
            if (damageResult?.killedUnit) {
                destroyedUnits.push(damageResult.killedUnit);
            }
        })

    }

    return destroyedUnits;

}


export const drawCard = (player: PlayerState, amount: number = 1): Card[] => {
    if (player.hand.length >= gameRules.MAX_HAND_SIZE) return [];
    const drawCount = Math.min(amount, player.deck.length);
    const drawnCards = player.deck.splice(0, drawCount);
    player.hand.push(...drawnCards);
    return drawnCards;
}

export const playCardToBoard = (target: Card, player: PlayerState, opponent: PlayerState) => {
    if (player.board.length >= gameRules.MAX_FIELD_SIZE) {
        return;
    }
    player.board.push(target);
    player.hand = player.hand.filter(card => card.instanceId != target.instanceId);
    activateEffect(target, EffectType.ON_PLAY, [player, opponent]);
}


export const dealDirectDamage = (targetPlayerState: PlayerState, attackingPlayerSate: PlayerState, amount: number) => {
    applyDirectDamage(targetPlayerState, attackingPlayerSate, amount);
    //targetPlayerState.lifePoints -= amount;
}

export const boostStats = (card: Card, { attack, defense }: stats) => {
    if (!card.attack || !card.defense) return;
    card.attack += attack;
    card.defense += defense;
};

export const rebornRandom = (condition: (unit: any) => boolean, [player, opponent]: PlayerState[], activatorCard: Card): Card | void => {
    if (player.board.length >= gameRules.MAX_FIELD_SIZE) {
        return;
    }
    const owner = [player, opponent].find(p => p.id == activatorCard.ownerId);
    if (!owner) return;

    const validTargets = owner.graveyard.filter(condition);

    if (validTargets.length === 0) return;

    const randomIdx = Math.floor(Math.random() * validTargets.length);
    const reborned = validTargets[randomIdx];

    // Remove from graveyard and add to board
    owner.graveyard = owner.graveyard.filter(unit => unit !== reborned);
    owner.board.push(reborned);
    activateEffect(reborned, EffectType.ON_PLAY, [player, opponent]);

    return reborned;
};

export const destroyUnit = (target: Card, [player, opponent]: PlayerState[]) => {

}

export const applyChain = (target: Card) => {
    target.statusConditions.push(StatusCondition.CHAINED);
    target.isHorizontal = true;
}


export type CardEffectMap = {
    default?: Effect[];
    bt?: Effect[];
};

export function getActiveEffects(cardName: string, isBtActive: boolean): Effect[] {
    const entry = cardEffects[cardName];
    if (!entry) return [];

    const btEffects = isBtActive ? entry.bt ?? [] : [];
    const defaultEffects = entry.default ?? [];

    return [...btEffects, ...defaultEffects];
}


export const cardEffects: Record<string, CardEffectMap> = {
    ...redEffects,
    ...blackEffects
};

import { Card, StatusCondition } from "./Card";
import { gameRules } from "./gameRules";
import { BasePayload, ValidatorResult, EventType, GameEvent, PlayerState, Keyword } from "./interfaces";

export interface Unit extends Card {
    attack: number;
    defense: number;
}


export type UnitsCanBattleResult =
    | { success: true; }
    | { success: false; reason: string };


const success: ValidatorResult = { success: true };

export const unitsCanBattle = (
    attacker: Unit,
    defender: Unit,
    [player, opponent]: PlayerState[]
): UnitsCanBattleResult => {


    if (!attacker.isActive || attacker.isHorizontal) {
        return { success: false, reason: attacker.name + ' is not allowed to attack' };
    }

    if (
        attacker.attack == null ||
        attacker.defense == null ||
        defender.attack == null ||
        defender.defense == null
    ) {
        return { success: false, reason: "Target dell'attacco non valido" };
    }

    if (!defender.isHorizontal && opponent.board.some(c => c.isHorizontal)) {
        return {
            success: false,
            reason: "You must attack the units in defense position first",
        };
    }

    if (
        attacker.keywords.includes(Keyword.Cowardly) &&
        !player.board.some(unit => unit.isHorizontal)
    ) {
        return {
            success: false,
            reason:
                "Cowardly units can only attack if you control a unit in defense position",
        };
    }

    if (attacker.statusConditions.includes(StatusCondition.CHAINED)) {
        return {
            success: false,
            reason:
                `${attacker.name} is chained`,
        };
    }

    if (!defender.keywords.includes(Keyword.MARTYR) && opponent.board.some(unit => unit.keywords.includes(Keyword.MARTYR) && unit.isHorizontal)) {
        return {
            success: false,
            reason:
                `You need to attack Martyr units in defense position first`,
        };
    }


    return {
        success: true,
    };
};


export const cardCanBePlayed = (player: PlayerState, cardId: string): ValidatorResult => {
    if (player.board.length >= gameRules.MAX_FIELD_SIZE) {
        return { success: false, reason: 'Your board is full' };
    }

    const idx = player.hand.findIndex(c => c.instanceId === cardId);
    if (idx === -1) {
        return { success: false, reason: 'Card not in hand' };
    }

    const card = player.hand[idx];

    if (player.mana < card.cost) {
        return { success: false, reason: 'Insufficient mana' };
    }

    return success;
}
import { Card } from "./Card";
import { CardType, PlayerState } from "./interfaces";

export function controlsAnotherMinion(playerBoard: Card[], selfCard: Card): boolean {
    return playerBoard.some(card =>
        card.instanceId !== selfCard.instanceId && card.type === CardType.MINION
    );
}

export function controlsMinionWithNameFragment(playerBoard: Card[], fragment: string, selfCard?: Card): boolean {
    return playerBoard.some(card =>
        (!selfCard || card.instanceId !== selfCard.instanceId) &&
        card.type === CardType.MINION &&
        card.name.toLowerCase().includes(fragment.toLowerCase())
    );
}

export function isCardTapped(card: Card): boolean {
    return card.isHorizontal;
}

export function isBt(playerStates: PlayerState[]): boolean {
    return playerStates.some(p => p.bloodThirst);
}
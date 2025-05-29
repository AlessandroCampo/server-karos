import { GameState, PlayerState } from "@shared/interfaces";
import { Card } from "../../shared/Card";

export function sanitizeGameStateFor(
    viewerId: string,
    state: GameState
): GameState {
    // deep clone so we don’t mutate the real state
    const clone: GameState = JSON.parse(JSON.stringify(state));

    for (const [pid, pstate] of Object.entries(clone.players) as [
        string,
        PlayerState
    ][]) {
        if (pid !== viewerId) {
            // only hide the opponent’s hand
            pstate.hand = pstate.hand.map((card: Card) => new Card({
                templateId: card.templateId,
                instanceId: card.instanceId,
                ownerId: pid,
                isActive: true,

                name: 'HIDDEN',
                image_url: '',
                attack: 0,
                defense: 0,
                cost: 0,
                originalAttack: 0,
                originalCost: 0,
                originalDefense: 0,
                boostedByMana: 0,

                color: 'HIDDEN' as any,
                type: 'HIDDEN' as any,
                subtype: 'HIDDEN' as any,

                isFoil: false,
                isHorizontal: false,

                keywords: [],
                originalKeywords: [],
                effectText: '',
                btText: '',
                effectTypes: [],
            }));

        }
    }

    return clone;
}
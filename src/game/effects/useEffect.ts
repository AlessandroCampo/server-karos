import { Card } from "../../../shared/Card";
import { cardEffects, getActiveEffects } from "../../data/cardEffects";
import { EffectType } from "../../../shared/Effect";
import { GameState, PlayerState, ServerRequest, TargetSelectionRequest } from "../../../shared/interfaces";
import { SideEffect } from "../../../shared/interfaces";
import { Effect } from "../../../shared/Effect";

export type ActivateEffectResult =
    | null
    | { targetSelectionRequest: TargetSelectionRequest }
    | { effectTriggered: Effect[] };


export const useEffect = () => {


    const activateEffect = (
        card: Card,
        type: EffectType,
        playerStates: PlayerState[],
        target?: Card,
        bypassTargetCheck = false
    ): ActivateEffectResult => {
        const effects = getActiveEffects(card.name, playerStates[0].bloodThirst);

        let triggeredEffects: Effect[] = [];

        for (const effect of effects) {
            if (effect.type !== type) continue;
            if (!effect.condition(playerStates, card)) continue;

            // Needs targeting
            if (effect.targets && !bypassTargetCheck) {
                const validTargets = effect.validTargets(playerStates, card);
                if (validTargets.length) {
                    return {
                        targetSelectionRequest: {
                            type: ServerRequest.TARGET_SELECTION,
                            validTargets,
                            card,
                            playerId: card.ownerId || '',
                            effect,
                        }
                    };
                }
            }

            // Apply cost and resolve effect
            effect.cost(playerStates, card);
            effect.resolver(playerStates, card, target);

            triggeredEffects = [...triggeredEffects, effect];
        }

        return triggeredEffects.length > 0
            ? { effectTriggered: triggeredEffects }
            : null;

    };

    return {
        activateEffect
    };
}
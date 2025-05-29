import { Card } from "./Card";
import { GameState, PlayerState } from "./interfaces";


// EffectType.ts
export enum EffectType {
    // General Lifecycle
    ON_PLAY = "ON_PLAY",             // Triggered when played from hand
    ON_DEATH = "ON_DEATH",
    ON_BATTLE_DEATH = "ON_BATTLE_DEATH",        // When the card dies
    ON_DRAW = "ON_DRAW",             // When drawn from deck
    ON_DISCARD = "ON_DISCARD",       // When discarded
    ON_SUMMON = "ON_SUMMON",         // When summoned (bypassing 'play')
    ON_DESTROY = "ON_DESTROY",       // Explicit destroy (different from 'death' if needed)
    ON_TAP = "ON_TAP",
    ON_BT = "ON_BT",
    ON_KILL = "ON_KILL",
    ON_ALLY_DEATH = 'ON_ALLY_DEATH',

    // Turn-Based
    START_OF_TURN = "START_OF_TURN",
    ON_PASS = "ON_PASS",

    // Combat Related
    ON_ATTACK = "ON_ATTACK",         // When initiating an attack
    ON_DEFEND = "ON_DEFEND",         // When blocking
    AFTER_COMBAT = "AFTER_COMBAT",

    // Damage / Heal
    ON_DAMAGE_TAKEN = "ON_DAMAGE_TAKEN",
    ON_DAMAGE_DEALT = "ON_DAMAGE_DEALT",
    ON_HEAL = "ON_HEAL",

    // Keyword/Passive
    AURA = "AURA",                   // Constant passive effect
    BUFF = "BUFF",                   // Applies stats or keywords
    DEBUFF = "DEBUFF",

    // Game Events
    ON_CARD_PLAYED = "ON_CARD_PLAYED", // Any card played (optionally filtered)
    ON_CARD_DRAWN = "ON_CARD_DRAWN",
    ON_CARD_DISCARDED = "ON_CARD_DISCARDED",
    ON_MINION_SUMMONED = "ON_MINION_SUMMONED",
    ON_SPELL_CAST = "ON_SPELL_CAST",

    // Custom/Manual
    ACTIVATED = "ACTIVATED",         // Manually triggered by player (e.g., Hero Power)
    TRIGGERED = "TRIGGERED",         // Custom triggers (e.g., combo, condition met)
}


export interface EffectContext {
    type: string;
    targets?: boolean;
    condition?: (playerStates?: PlayerState[], card?: Card, target?: Card) => boolean; // Parameters are optional
    cost?: (playerStates?: PlayerState[], card?: Card) => any;
    resolver: (playerStates: PlayerState[], card?: Card, target?: Card) => any;
    validTargets?: (playerStates: PlayerState[], card?: Card) => Card[];
}

export class Effect implements EffectContext {
    type: string;
    condition: (playerStates?: PlayerState[], card?: Card, target?: Card) => boolean;
    cost: (playerStates?: PlayerState[], card?: Card) => any;
    resolver: (playerStates: PlayerState[], card?: Card, target?: Card) => any;
    validTargets: (playerStates: PlayerState[], card?: Card) => Card[];
    targets: boolean;

    constructor(params: EffectContext) {
        this.type = params.type ?? "";

        // Default condition function returns true if no players are passed
        this.condition = params.condition ?? (() => true);

        this.cost = params.cost ?? (() => { });
        this.resolver = params.resolver ?? (() => { });
        this.validTargets = params.validTargets ?? (() => []);
        this.targets = params.targets || false;
    }

}

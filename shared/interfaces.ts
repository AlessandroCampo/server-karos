import { ArcheType, Card } from "./Card";
import { Effect, EffectType } from "./Effect";


export enum CardType {
    MINION = "MINION",
    SPELL = "SPELL",
    TRAP = "TRAP"
}

export enum SubType {
    CONTINOUS = "CONTINOUS",
    EQUIP = "EQUIP",
    FIELD = "FIELD"
}

export enum Color {
    RED = "RED",
    BLUE = "BLUE",
    BLACK = "BLACK",
    GREEN = "GREEN",
    YELLOW = "YELLOW",
    BROWN = "BROWN",
    WHITE = "WHITE"
}


export interface DecklistCard {
    card: CardParams; quantity: number
}

export interface Deck {
    id?: number;
    playerId?: number;
    name: string;
    decklist: DecklistCard[],
}

export enum Keyword {
    RUSH = 'Rush',
    UNCHAINED = 'Unchained',
    FEARLESS = 'Fearless',
    DUELIST = 'Duelist',
    BONESKIN = 'Boneskin',
    HONORLESS = 'Honorless',
    LIFESTEAL = 'Lifesteal',
    BERSERKER = 'Berserker',
    Cowardly = 'Cowardly',
    DOUBLE_ATTACK = "Double attack",
    MARTYR = "Martyr",
    IMMOBILE = "Immobile",
    HEROIC_SPIRIT = "Heroic spirit"
}


export interface CardParams {
    templateId: string;
    name: string;
    attack: number | null;
    defense: number | null;
    cost: number;
    color: Color | "HIDDEN";
    type: CardType | "HIDDEN";
    subtype: SubType | "HIDDEN" | null;
    archetype?: ArcheType,
    keywords: Keyword[];
    effectText?: string;
    btText?: string;
}

export interface FullCardParams extends CardParams {
    instanceId: string;
    image_url: string;
    originalAttack: number | null;
    originalDefense: number | null;
    originalCost: number;
    isFoil: boolean;
    isActive: boolean;
    isHorizontal: boolean;
    ownerId?: string;
    boostedByMana: number;
    originalKeywords: Keyword[];
    effectTypes: EffectType[];
}

export type CardTemplateMap = {
    [key: string]: CardParams;
};



export interface PlayerState {
    id: string;
    deck: Card[];
    hand: Card[];
    board: Card[];
    graveyard: Card[];
    lifePoints: number;
    mana: number;
    turnsTaken: number;
    shield: boolean;
    shieldBroken: boolean;
    bloodThirst: boolean;
    canReroll: boolean;
}

export interface GameState {
    players: Record<string, PlayerState>;
    turnPlayerId: string;
    turnNumber: number;
    startingPlayerId: string;
    globalTurn: number;
}

export interface BasePayload {
    room: string;
    playerId: string;
    eventType: EventType;

}

export interface PlayCardPayload extends BasePayload {
    eventType: EventType.CARD_PLAYED;
    cardId: string;
}

export interface DrawPayload extends BasePayload {
    eventType: EventType.CARD_DRAWN;
    amount?: number;
}
export interface RerollPayload extends BasePayload {
    eventType: EventType.REROLL;
    rerolledCardId?: string;
}

export interface PassTurnPayload extends BasePayload {
    eventType: EventType.TURN_ENDED;
}

export interface DirectAttackPayload extends BasePayload {
    eventType: EventType.DIRECT_ATTACK;
    cardId: string;
}

export interface MinionAttackPayload extends BasePayload {
    eventType: EventType.APPLY_MINION_ATTACK;
    attackingMinionId: string;
    defendingMinionId: string;
}
export interface ChangePositionPayload extends BasePayload {
    eventType: EventType.CHANGE_POSITION;
    cardId: string;
}
export interface ManaBoostPayload extends BasePayload {
    eventType: EventType.MANA_BOOST;
    cardId: string;
}
export interface TargetSelectionPayload extends BasePayload {
    eventType: EventType.MANA_BOOST;
    selectedTargetId: string;
}
// 1) Rename the base interface so it doesn’t collide with the union:
export interface BaseGameEvent {
    type: string;
    playerId: string;
    timestamp?: number;
    waitForClient?: ClientInputRequest;
    sideEvents?: EffectTriggered[];
}

export type SideEffect =
    | DestroyCardEffect
    | DamageEffect
    | EffectTriggered

export enum SideEvent {
    EFFECT_TRIGGERED = "EFFECT_TRIGGERED"
};

export interface EffectTriggered {
    type: SideEvent.EFFECT_TRIGGERED;
    cardId: string;
}

export interface DestroyCardEffect {
    type: 'CARD_DESTROYED';
    cardId: string;
}

export interface DamageEffect {
    type: 'DAMAGE_RESOLVED';
    sourceId: string;
    targetId: string;
    amount: number;
}



export enum EventType {
    TURN_ENDED = "turn-ended",
    CARD_DRAWN = "card-drawn",
    CARD_PLAYED = "card-played",
    DIRECT_ATTACK = 'direct-attack',
    APPLY_MINION_ATTACK = 'minion-attack',
    CHANGE_POSITION = 'change-position',
    MANA_BOOST = 'mana-boost',
    GAME_OVER = "game-over",
    TARGET_SELECTION = 'target-selection',
    REROLL = "reroll",
}


// 2) Give each specific event its correct literal, and only the fields it needs:
export interface CardPlayedEvent extends BaseGameEvent {
    type: EventType.CARD_PLAYED;
    card: Card;
}

export interface EndTurnEvent extends BaseGameEvent {
    type: EventType.TURN_ENDED;
    nextPlayerId: string;
    drawnCard?: Card | undefined;
}
export interface RerollEvent extends BaseGameEvent {
    type: EventType.REROLL;
    rerolledCardId: string;
}

export interface CardDrawnEvent extends BaseGameEvent {
    type: EventType.CARD_DRAWN;
    card: Card | undefined;
}
export interface DirectAttackEvent extends BaseGameEvent {
    type: EventType.DIRECT_ATTACK;
    card: Card;
    damage: Number;
}
export interface MinionAttackEvent extends BaseGameEvent {
    type: EventType.APPLY_MINION_ATTACK;
    destroyedCardIds: string[];
    attacker: Card;
    defender: Card;
}


export interface ChangePositionEvent extends BaseGameEvent {
    type: EventType.CHANGE_POSITION;
    card: Card
}
export interface GameOverEvent extends BaseGameEvent {
    type: EventType.GAME_OVER;
    winnerId: string
}
export interface TargetSelectionEvent extends BaseGameEvent {
    type: EventType.TARGET_SELECTION;
}

// shared/interfaces.ts

export interface EventFailure {
    success: false;
    reason: string;
}

export interface ValidatorResult {
    success: boolean,
    reason?: string
}

export enum ServerRequest {
    TARGET_SELECTION = 'TARGET_SELECTION'
}

export type ClientInputRequest =
    | TargetSelectionRequest
    | SomeOtherClientPrompt; // extend as needed

export interface TargetSelectionRequest {
    type: ServerRequest.TARGET_SELECTION;
    validTargets: Card[];
    card: Card;
    effect: Effect;
    playerId: string;
}

// Example for future-proofing:
export interface SomeOtherClientPrompt {
    type: 'CHOOSE_FROM_OPTIONS';
    options: string[];
}

export type EventResult<T> =
    | ({
        success: true;
        state: GameState;
        waitForClient?: ClientInputRequest;
        sideEvents?: SideEffect[]
    } & T)
    | EventFailure;


export type GameEvent =
    | CardPlayedEvent
    | EndTurnEvent
    | CardDrawnEvent
    | DirectAttackEvent
    | MinionAttackEvent
    | ChangePositionEvent
    | GameOverEvent
    | TargetSelectionEvent
    | RerollEvent


export type MethodReturn<T, K extends keyof T> =
    T[K] extends (...args: any[]) => infer R
    ? R
    : never;


export type StatKey = 'attack' | 'defense' | 'cost';

import { EffectType } from './Effect';
import type { Color, CardType, SubType, CardParams, Keyword } from './interfaces';

export enum ArcheType {
    UNDEAD = "Undead"
}

export enum StatusCondition {
    CHAINED = "Chained"
}


class Card {
    instanceId: string;
    templateId: string;
    name: string;
    image_url?: string;
    attack: number | null;
    defense: number | null;
    originalAttack: number | null;
    originalDefense: number | null;
    boostedByMana: number;
    cost: number;
    originalCost: number;
    isFoil: boolean;
    isActive: boolean;
    isHorizontal: boolean;
    archetype?: ArcheType | null;
    keywords: Keyword[];
    originalKeywords: Keyword[];
    color: Color | "HIDDEN";
    type: CardType | "HIDDEN";
    subtype: SubType | "HIDDEN" | null;
    effectText: string;
    btText: string;
    ownerId?: string | null;
    effectTypes: EffectType[];
    statusConditions: StatusCondition[];
    attacksCounter: number;
    rebornedByBoneskin: boolean;

    constructor({
        templateId,
        instanceId,
        name,
        image_url,
        attack,
        defense,
        cost,
        originalAttack,
        originalDefense,
        originalCost,
        originalKeywords,
        color,
        type,
        subtype,
        isFoil = false,
        isHorizontal = false,
        isActive = true,
        boostedByMana = 0,
        archetype = null,
        ownerId = null,
        keywords = [],
        effectTypes = [],
        statusConditions = [],
        effectText = '',
        btText = '',
        rebornedByBoneskin = false,
    }: {
        templateId: string;
        instanceId: string;
        name: string;
        image_url: string;
        attack: number | null;
        defense: number | null;
        originalAttack: number | null;
        originalDefense: number | null;
        cost: number;
        originalCost: number;
        color: Color | "HIDDEN";
        type: CardType | "HIDDEN";
        subtype: SubType | "HIDDEN" | null;
        isFoil?: boolean;
        isHorizontal?: boolean;
        isActive?: boolean;
        boostedByMana?: number;
        ownerId?: string | null;
        keywords?: Keyword[];
        archetype?: ArcheType | null,
        originalKeywords?: Keyword[];
        effectTypes?: EffectType[];
        statusConditions?: StatusCondition[];
        effectText?: string;
        btText?: string,
        rebornedByBoneskin?: boolean
    }) {


        this.templateId = templateId;
        this.instanceId = instanceId;
        this.name = name;
        this.image_url = image_url || '';
        this.attack = attack;
        this.defense = defense;
        this.originalAttack = originalAttack;
        this.originalDefense = originalDefense;
        this.cost = cost;
        this.originalCost = originalCost;
        this.isFoil = isFoil;
        this.effectText = effectText;
        this.btText = btText;
        this.isActive = isActive;
        this.keywords = keywords;
        this.archetype = archetype || null;
        this.color = color;
        this.type = type;
        this.subtype = subtype;
        this.ownerId = ownerId || null;
        this.isHorizontal = isHorizontal;
        this.effectTypes = effectTypes;
        this.boostedByMana = 0;
        this.attacksCounter = 0;
        this.originalKeywords = originalKeywords || [];
        this.statusConditions = statusConditions || [];
        this.rebornedByBoneskin = rebornedByBoneskin || false;
    }


}


export { Card };

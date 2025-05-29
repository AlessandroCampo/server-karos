import { prisma } from '../prismaClient';
import { CardParams, FullCardParams } from '../../shared/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { testDecks } from '../testDecks';
import { Card } from '../../shared/Card';
import { cardEffects, getActiveEffects } from '../data/cardEffects';
import { EffectType } from '../../shared/Effect';


export const getBaseFromTemplate = (card: CardParams, playerId?: string) => {
    const effects = getActiveEffects(card.name, false);
    const base: Omit<FullCardParams, 'instanceId'> = {
        templateId: card.templateId,
        name: card.name,
        image_url: `${process.env.BASE_URL}/uploads/${card.templateId}.jpg`,
        attack: card.attack,
        originalAttack: card.attack,
        defense: card.defense,
        originalDefense: card.defense,
        cost: card.cost,
        originalCost: card.cost,
        color: card.color as any,
        type: card.type as any,
        subtype: card.subtype as any,
        keywords: card.keywords,
        originalKeywords: card.keywords,
        isFoil: false,
        isActive: true,
        effectText: card.effectText ?? '',
        btText: card.btText ?? '',

        isHorizontal: false,
        effectTypes: effects.map(eff => eff.type as EffectType),
        boostedByMana: 0
    };

    return base;
}


export function fetchDeckData(
    deckList: { card: CardParams; quantity: number }[],
    playerId: string
): Card[] {


    const fullDeck: Card[] = [];

    for (const { card, quantity } of deckList) {

        const base = getBaseFromTemplate(card);



        for (let i = 0; i < quantity; i++) {
            fullDeck.push(new Card({
                instanceId: uuidv4(),
                ownerId: playerId,
                ...base
            }));
        }

    }

    return fullDeck;
}
import { Router, Request, Response, response } from 'express';
import { cardTemplates } from '../data/testCards';
import { prisma } from '../prismaClient';
import { Deck } from '../../shared/interfaces';


export const decklistRouter = Router();

decklistRouter.post('/', async (req: Request, res: Response): Promise<any> => {
    try {
        const deck: Deck = req.body.deck;

        // 1. Delete all previous decklists for the player
        await prisma.decklist.deleteMany({
            where: {
                playerId: deck.playerId,
            },
        });

        // 2. Insert the new deck
        const createdDeck = await prisma.decklist.create({
            data: {
                name: deck.name,
                playerId: deck.playerId,
                cards: deck.decklist,
            },
        });

        return res.status(201).json({ deck: createdDeck });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Insert failed' });
    }
});


function serializeBigInts(obj: any) {
    return JSON.parse(
        JSON.stringify(obj, (_, value) =>
            typeof value === 'bigint' ? value.toString() : value
        )
    );
}

decklistRouter.get('/:playerId', async (req: Request, res: Response): Promise<any> => {
    const playerId = Number(req.params.playerId); // Ensure it's a number

    try {
        const deck = await prisma.decklist.findFirst({
            where: { playerId },
            orderBy: { id: 'asc' },
        });

        return res.json(deck ?? null); // Prisma handles BigInt serialization internally if possible
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to fetch deck' });
    }
});




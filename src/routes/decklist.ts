import { Router, Request, Response, response } from 'express';
import { cardTemplates } from '../data/testCards';
import { prisma } from '../prismaClient';
import { Deck } from '../../shared/interfaces';


export const decklistRouter = Router();

decklistRouter.post('/', async (req: Request, res: Response): Promise<any> => {
    try {
        const playerId = req.playerId;
        if (!playerId) {
            return res.status(401).json({ error: 'Unauthorized: missing playerId' });
        }

        const deck: Deck = req.body.deck;

        // 1. Delete all previous decklists for the player
        await prisma.decklist.deleteMany({
            where: {
                playerId,
            },
        });

        // 2. Insert the new deck
        const createdDeck = await prisma.decklist.create({
            data: {
                name: deck.name,
                playerId,
                cards: JSON.stringify(deck.decklist),
            },
        });

        return res.status(201).json({ deck: createdDeck });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Insert failed' });
    }
});



decklistRouter.get('/', async (req: Request, res: Response): Promise<any> => {
    const playerId = req.playerId;
    if (!playerId) {
        return res.status(401).json({ error: 'Unauthorized: missing playerId' });
    }

    try {
        const deck = await prisma.decklist.findFirst({
            where: { playerId },
            orderBy: { id: 'asc' },
        });

        return res.json(deck ?? null);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to fetch deck' });
    }
});




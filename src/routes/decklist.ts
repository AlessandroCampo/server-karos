import { Router, Request, Response, response } from 'express';
import { cardTemplates } from '../data/testCards';
import { prisma } from '../prismaClient';
import { Deck } from '../../shared/interfaces';


export const decklistRouter = Router();

decklistRouter.post('/', async (req: Request, res: Response): Promise<any> => {
    try {
        const deck: Deck = req.body.deck;

        await prisma.$executeRaw`
      DELETE FROM decklists WHERE playerId = ${deck.playerId}
    `;

        await prisma.$executeRaw`
            INSERT INTO decklists (name, playerId, cards)
            VALUES (${deck.name}, ${deck.playerId}, ${JSON.stringify(deck.decklist)})
        `;

        return res.status(201).json({ deck });
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
    const playerId = req.params.playerId;

    try {
        const deck = await prisma.$queryRaw`
            SELECT * FROM decklists WHERE playerId = ${playerId} ORDER BY id ASC LIMIT 1
        `;


        return res.json(deck ? serializeBigInts(deck)[0] : null);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to fetch deck' });
    }
});



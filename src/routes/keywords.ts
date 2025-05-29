import { Router, Request, Response } from 'express';
import { prisma } from '../prismaClient';

export const keywordsRouter = Router();

keywordsRouter.get('/', async (_req, res) => {
    const keywords = await prisma.keyword.findMany();
    res.json(keywords);
});


keywordsRouter.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body;
        const existing = await prisma.keyword.findUnique({ where: { name } });

        if (existing) {
            // Send response without returning res directly
            res.status(400).json({ error: 'Keyword already exists' });
            return; // Early exit here if the keyword exists
        }

        // Create new keyword in DB
        const created = await prisma.keyword.create({ data: { name } });

        // Send response for successful creation
        res.status(201).json(created);
    } catch (err) {
        console.error('Error creating keyword:', err);
        res.status(500).json({ error: 'An error occurred while creating keyword' });
    }
});


keywordsRouter.get('/keywords', async (req, res) => {
    try {
        const keywords = await prisma.keyword.findMany(); // or whatever your Prisma model is called
        res.json(keywords);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch keywords' });
    }
});
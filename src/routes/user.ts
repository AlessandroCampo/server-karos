// src/routes/user.ts
import express, { Request, Response } from 'express';
import { prisma } from '../prismaClient';
import { generateToken } from '../jwt';

export const authRouter = express.Router();

authRouter.post('/', async (req: Request, res: Response): Promise<any> => {
    const { playerName } = req.body;

    if (typeof playerName !== 'string' || !playerName.trim()) {
        return res.status(400).json({ error: 'Invalid playerName' });
    }

    try {
        const player = await prisma.player.findUnique({
            where: { name: playerName },
        });

        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }

        const token = generateToken(player.id);
        return res.json({ token, playerId: player.id });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Login failed' });
    }
});

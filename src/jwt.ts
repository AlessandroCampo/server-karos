// src/utils/jwt.ts
import jwt from 'jsonwebtoken';


const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // put in .env for production
const JWT_EXPIRES_IN = '7d';

export function generateToken(playerId: number): string {
    return jwt.sign({ playerId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string): { playerId: number } {
    return jwt.verify(token, JWT_SECRET) as { playerId: number };
}

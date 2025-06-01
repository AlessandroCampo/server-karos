import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../jwt'; // returns payload with playerId

export function jwtAuth(req: Request, res: Response, next: NextFunction) {
    const publicPrefix = '/auth';

    if (req.path.startsWith(publicPrefix)) {
        return next();
    }

    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Missing or invalid Authorization header' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = verifyToken(token);
        req.playerId = payload.playerId;
        next();
    } catch {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
}

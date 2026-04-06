import { Router, Request, Response } from 'express';
import { Challenge } from '../models/Challenge';

const challengeRouter = Router();

challengeRouter.get('/', async (req: Request, res: Response) => {
  const challenges = await Challenge.find().exec();
  res.json(challenges);
});

challengeRouter.post('/', async (req: Request, res: Response) => {
  const challenge = new Challenge(req.body);
  await challenge.save();
  res.json(challenge);
});

export default challengeRouter;
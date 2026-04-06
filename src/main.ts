import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import challengeRouter from './routes/challengeRoute';
import userRouter from './routes/userRoute';
import leaderboardRouter from './routes/leaderboardRoute';

const app = express();
app.use(express.json());
app.use('/api/challenges', challengeRouter);
app.use('/api/users', userRouter);
app.use('/api/leaderboard', leaderboardRouter);

mongoose.connect('mongodb://localhost:27017/eco-cycle', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
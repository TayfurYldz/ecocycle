import express, { Request, Response } from 'express';
import mongoose from 'mongodb';
import { User } from './models/User';
import { Post } from './models/Post';
const app = express();
const port = 3000;
app.use(express.json());
app.post('/api/auth/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  try {
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error creating user' });
  }
});
app.post('/api/auth/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
    if (user.password !== password) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
    res.send({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error logging in' });
  }
});
app.post('/api/posts', async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const post = new Post({ title, content });
  try {
    await post.save();
    res.status(201).send({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error creating post' });
  }
});
app.get('/api/posts', async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    res.status(500).send({ message: 'Error getting posts' });
  }
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
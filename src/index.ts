import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import { google } from 'googleapis';

const app = express();
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

app.use(express.json());

app.get('/api/recycling-centers', async (req: Request, res: Response) => {
  const location = req.query.location;
  const results = await pool.query(`SELECT * FROM recycling_centers WHERE location = $1`, [location]);
  res.json(results.rows);
});

app.post('/api/users', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const results = await pool.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`, [username, email, password]);
  res.json(results.rows[0]);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
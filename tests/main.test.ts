import { jest } from '@jest/globals';
import request from 'supertest';
import app from '../src/main';

describe('GET /api/challenges', () => {
  it('should return a list of challenges', async () => {
    const response = await request(app).get('/api/challenges');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
import { app } from '../src/index';
import request from 'supertest';

describe('GET /api/recycling-centers', () => {
  it('should return a list of nearby recycling centers', async () => {
    const response = await request(app).get('/api/recycling-centers?location=New+York');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
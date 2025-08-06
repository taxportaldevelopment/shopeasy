const request = require('supertest');
const { app, server } = require('../app');

describe('GET /', () => {
  afterAll(() => {
    server.close();
  });

  it('should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome To Shopeasy from Taxport!');
  });
});
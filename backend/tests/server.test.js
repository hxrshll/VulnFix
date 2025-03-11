const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('API is running...'));

test('GET / should return API is running', async () => {
  const res = await request(app).get('/');
  expect(res.status).toBe(200);
  expect(res.text).toBe('API is running...');
});

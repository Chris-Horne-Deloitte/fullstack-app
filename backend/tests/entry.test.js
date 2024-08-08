const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Entry = require('../models/Entry');
const entryRoutes = require('../routes/entries'); // Correct import path

const app = express();
app.use(express.json());
app.use('/api/entries', entryRoutes);

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Entry API', () => {
  it('should create a new entry', async () => {
    const res = await request(app)
      .post('/api/entries')
      .send({ title: 'Test Entry', content: 'Test Content' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  // Add more tests for read, update, delete
});
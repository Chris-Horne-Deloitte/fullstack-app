const request = require('supertest');
const express = require('express');
const Entry = require('../models/Entry');
const entryRoutes = require('../routes/entries'); // Correct import path

const app = express();
app.use(express.json());
app.use('/api/entries', entryRoutes);

describe('Entry API', () => {
  // Clean up the database before each test
  beforeEach(async () => {
    await Entry.deleteMany({});
  });

});

  it('should create a new entry', async () => {
    const res = await request(app)
      .post('/api/entries')
      .send({ title: 'Test Entry', content: 'Test Content' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });


  // Add more tests for read, update, delete
});
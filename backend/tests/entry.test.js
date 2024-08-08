const request = require('supertest');
const express = require('express');
const entryRoutes = require('../routes/entries'); // Correct import path

// Mock the Entry model
jest.mock('../models/Entry', () => {
  return {
    find: jest.fn(),
    deleteMany: jest.fn(),
  };
});

const Entry = require('../models/Entry');

const app = express();
app.use(express.json());
app.use('/api/entries', entryRoutes);

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Entry.find.mockClear();
  Entry.deleteMany.mockClear();
});

describe('GET /api/entries', () => {
  it('should return an empty array when no entries', async () => {
    // Mock the find method to return an empty array
    Entry.find.mockResolvedValue([]);

    const res = await request(app).get('/api/entries');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });
});
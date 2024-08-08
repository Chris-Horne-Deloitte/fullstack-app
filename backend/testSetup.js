// backend/testSetup.js
const mongoose = require('mongoose');
jest.setTimeout(10000); // Increase the timeout for all tests to 10 seconds

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
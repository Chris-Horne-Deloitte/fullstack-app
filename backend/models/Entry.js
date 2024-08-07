// backend/models/Entry.js
const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model('Entry', EntrySchema);
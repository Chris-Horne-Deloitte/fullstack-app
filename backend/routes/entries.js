// backend/routes/entries.js
const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

// Create
router.post('/', async (req, res) => {
  const newEntry = new Entry(req.body);
  await newEntry.save();
  res.status(201).send(newEntry);
});

// Read
router.get('/', async (req, res) => {
  const entries = await Entry.find();
  res.status(200).send(entries);
});

// Update
router.put('/:id', async (req, res) => {
  const updatedEntry = await Entry.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).send(updatedEntry);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Entry.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
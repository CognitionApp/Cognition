const express = require('express');
const router = express.Router();

// define route handlers

// get a specific card
router.get('/:id', (req, res) => {
  res.status(200).json({ message: 'Success' });
});

// get a card
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Success' });
});
// create a new card
router.post('/', (req, res) => {
  res.status(200).json({ message: 'Success' });
});
// update an existing card
router.patch('/:id', (req, res) => {
  res.status(200).json({ message: 'Success' });
});

// delete an existing card
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Success' });
});

module.exports = router;

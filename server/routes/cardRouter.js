const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

// define route handlers

// get a specific card
router.get('/:id', cardController.getCardById, (req, res) => {
  res.status(200).json({ message: 'Success' });
});

// get a card
router.get('/', cardController.getRandomCard, (req, res) => {
  res.status(200).json({ message: 'Success' });
});
// create a new card
router.post('/', cardController.createCard, (req, res) => {
  res.status(200).json({ message: 'Success' });
});
// update an existing card
router.patch('/:id', cardController.updateCard, (req, res) => {
  res.status(200).json({ message: 'Success' });
});

// delete an existing card
router.delete('/:id', cardController.deleteCard, (req, res) => {
  res.status(200).json({ message: 'Success' });
});

module.exports = router;

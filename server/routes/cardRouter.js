const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

// get a specific card
router.get('/:id', cardController.getCardById, (req, res) => {
  return res.status(200).json(res.locals.flashCard);
});

// get a card
router.get('/', cardController.getRandomCard, (req, res) => {
  return res.status(200).json(res.locals.flashCard);
});

// create a new card
router.post('/', cardController.createCard, (req, res) => {
  return res.status(200).json(res.locals.flashCard);
});

// update an existing card
router.patch('/:id', cardController.updateCard, (req, res) => {
  return res.status(200).json(res.locals.flashCard);
});

// delete an existing card
router.delete('/:id', cardController.deleteCard, (req, res) => {
  return res.status(200).json(res.locals.flashCard);
});

module.exports = router;

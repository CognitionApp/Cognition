const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

// get a random card
router.get('/next', cardController.getRandomCard, (req, res) => {
  return res.status(200).json(res.locals.flashCard);
});

// get a specific card
// (**this needs to go after the '/next' route, or bad things will happen!**)
router.get('/:id', cardController.getCardById, (req, res) => {
  return res.status(200).json(res.locals.flashCard);
});

// get all cards
router.get('/', cardController.getAllCards, (req, res) => {
  return res.status(200).json(res.locals.flashCards);
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

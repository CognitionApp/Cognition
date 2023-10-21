const FlashCard = require('../models/cardModel');

const cardController = {
  getCardById: (req, res, next) => {},
  getRandomCard: (req, res, next) => {},
  createCard: (req, res, next) => {
    const { question, answer } = req.body;
    FlashCard.create({ question: question, answer: answer })
      .then((data) => {
        console.log('data', data);
        if (!data) {
          return next({
            log: 'createCard failed here',
          });
        }
        res.locals.flashCard = data;
        return next();
      })
      .catch((error) => ({
        log: error,
        status: 404,
        message: { error: 'err' },
      }));
  },
  updateCard: (req, res, next) => {},
  deleteCard: (req, res, next) => {},
};

module.exports = cardController;

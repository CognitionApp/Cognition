const FlashCard = require('../models/cardModel');

const cardController = {
  getCardById: (req, res, next) => {},
  getRandomCard: (req, res, next) => {},

  createCard: (req, res, next) => {
    const { question, answer } = req.body;
    FlashCard.create({ question: question, answer: answer })
      .then((data) => {
        res.locals.flashCard = data;
        return next();
      })
      .catch((error) => {
        return next({
          log: error,
          status: 404,
          message: { error: 'Could not create flash card.' },
        });
      });
  },
  updateCard: (req, res, next) => {},
  deleteCard: (req, res, next) => {
    const { question, answer } = req.body;

    FlashCard.findOneAndDelete({
      _id: req.params.id,
      question: req.body.question,
      answer: req.body.answer,
    })

      .then((data) => {
        res.locals.flashCard = data;
        return next();
      })
      .catch((error) => {
        next({
          log: `Error: ${error}`,
          status: 500,
          message: { error: 'Could not delete card' },
        });
      });
  },

  updateCard: (req, res, next) => {
    const { question, answer } = req.body;

    FlashCard.findOneAndUpdate(
      { _id: req.params.id },
      { question: question, answer: answer },
      { new: true } // return the updated card so we can send it back to the client
    )
      .then((result) => {
        res.locals.result = result;
        return next();
      })
      .catch((err) => {
        return next({
          log: err,
          status: 500,
          message: { error: 'Could not update flash card in the database.' },
        });
      });
  },
};

module.exports = cardController;

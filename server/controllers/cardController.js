const FlashCard = require('../models/cardModel');

const cardController = {
  getCardById: (req, res, next) => {
    FlashCard.findById(req.params.id)
    .then((data) => {
      res.locals.flashCard = data;
      return next();
    })
    .catch((error) => {
      return next({
        log: error,
        status: 404,
        message: {error: `Could not find id: ${res.params.id} in database`}
      })
    })
  },

  getRandomCard: (req, res, next) => {
//from database, pull all of the object's ids into an array
    //randomly select an id from array
    //access database again to pull card info
      //send card info 
    console.log('entered getRandomCard');
    return next();
  },

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
  updateCard: (req, res, next) => {
    const { question, answer } = req.body;

    FlashCard.findOneAndUpdate(
      { _id: req.params.id },
      { question: question, answer: answer },
      { new: true } // return the updated card so we can send it back to the client
    )
      .then((data) => {
        res.locals.flashCard = data;
        return next();
      })
      .catch((error) => {
        return next({
          log: error,
          status: 500,
          message: { error: 'Could not update flash card in the database.' },
        });
      });
  },
  deleteCard: (req, res, next) => {
    FlashCard.findOneAndDelete({
      _id: req.params.id,
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
};

module.exports = cardController;

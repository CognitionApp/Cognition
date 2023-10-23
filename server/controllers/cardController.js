const FlashCard = require('../models/cardModel');

const cardController = {
  getAllCards: (req, res, next) => {
    FlashCard.find()
      .then((data) => {
        console.log(data);
        res.locals.flashCards = data;
        return next();
      })
      .catch((error) => {
        return next({
          log: error,
          status: 500,
          message: { error: 'Could not fetch the card list from the database.' }
        })
      });
  },

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
    FlashCard.find(undefined, '_id')
      .then(data => {
        //randomly select an id from array
        const randomCard = Math.floor(Math.random() * data.length);
        //access database again to pull the selected card's info
        return FlashCard.findById(data[randomCard]._id)
      })
      .then(data => {
        res.locals.flashCard = data;
        return next();
      })
      .catch((error) => {
        return next({
          log: error,
          status: 500,
          message: { error: 'Could not retrieve the next card from the database.' }
        })
      });
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

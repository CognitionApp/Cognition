const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flashcardSchema = new Schema({
  question: { type: String, required: true, unique: true },
  answer: { type: String, required: true },
});

module.exports = mongoose.model('FlashCard', flashcardSchema);

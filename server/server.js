const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const cardRouter = require('./routes/cardRouter');

mongoose.connect(
  'mongodb+srv://tdshelton:WadYSEmOAuRXvV1T@testcluster.cogzhpa.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.once('open', () => {
  console.log(`Connected to Database (mongoose readyState: ${mongoose.connection.readyState})`);
});

app.use(express.json());
app.use(express.urlencoded());

//routers
app.use('/cards', cardRouter);

//global errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: `Express error handler caught unknown middleware error: ${err}`,
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;

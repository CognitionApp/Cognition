const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
//react by default listens on port 3000
const cardRouter = require('./routes/cardRouter');

mongoose.connect(
  'mongodb+srv://tdshelton:WadYSEmOAuRXvV1T@testcluster.cogzhpa.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.once('open', async () => {
  await console.log('Connected to Database');
  console.log(mongoose.connection.readyState);
});

app.use(express.json());
app.use(express.urlencoded());

//routers
app.use('/cards', cardRouter);

//global errors
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;

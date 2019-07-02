const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

require('dotenv').config();

app.use(cors());
app.use(express.json());

const router = require('./routes/index');

app.use(router);

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-qmdil.mongodb.net/test?retryWrites=true`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  });


app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`); // eslint-disable-line
});

module.exports = app;

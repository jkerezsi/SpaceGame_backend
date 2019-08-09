/* eslint-disable no-console */
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3012;

require('dotenv').config();

mongoose.Promise = global.Promise;
const { Mockgoose } = require('mockgoose');

const mockgoose = new Mockgoose(mongoose);

app.use(cors());
app.use(express.json());

const router = require('./routes/index');

app.use(router);

const connectToDatabase = async () => {
  let databaseConnectionUri = `mongodb+srv://${process.env.DB_USERNAME}:${
    process.env.DB_PASSWORD
  }@cluster0-qmdil.mongodb.net/test?retryWrites=true`;

  if (process.env.NODE_ENV === 'test') {
    await mockgoose.prepareStorage();
    databaseConnectionUri = 'mongodb://localhost/testDB';
  }
  try {
    mongoose.connect(databaseConnectionUri, { useNewUrlParser: true });
  } catch (error) {
    console.log(error.message);
  }
  const database = mongoose.connection;
  database.once('open', () => {
    console.log(`${process.env.NODE_ENV === 'test' ? 'mock' : ''} db successfully connected!`);
  });
  return database;
};

const disconnectFromDatabase = async () => {
  await mongoose.disconnect();
};

module.exports = { app, connectToDatabase, disconnectFromDatabase };

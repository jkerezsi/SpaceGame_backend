const PORT = 3000;

const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

const router = require('./routes/index');

app.use(router);

app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`); // eslint-disable-line
});

module.exports = app;

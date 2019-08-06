// const PORT = process.env.PORT || 3013;
// const express = require('express');
// const BodyParser = require('body-parser');
// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.Promise = global.Promise;
// const { Mockgoose } = require('mockgoose');

// const mockgoose = new Mockgoose(mongoose);

// const app = express();
// const cors = require('cors');
// const router = require('../../src/routes/index');

// app.use(BodyParser.urlencoded({ extended: true }));
// app.use(cors());
// app.use(express.json());
// app.use(router);

// const open = () => new Promise((resolve) => {
//   if (process.env.NODE_ENV === 'test') {
//     mockgoose.prepareStorage().then(() => {
//       mongoose.connect('mongodb://localhost/testDB', { useNewUrlParser: true });
//     });
//     const testDB = mongoose.connection;
//     testDB.on('error', console.error.bind(console, 'connection error:')); //eslint-disable-line
//     testDB.once('open', () => {
//       console.log('mock db successfully connected!'); //eslint-disable-line
//     });
//     return resolve(testDB);
//   }
// });

// function close() {
//   return mongoose.disconnect();
// }

// open();

// app.listen(PORT, () => {
//   console.log(`Port is listening on ${PORT}`); // eslint-disable-line
// });

// module.exports = {
//   app,
//   open,
//   close,
// };

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// const { Schema } = mongoose;
const User = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

User.plugin(uniqueValidator, { message: 'Username is already taken.' });

module.exports = mongoose.model('User', User);

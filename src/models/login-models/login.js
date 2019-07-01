const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Login = mongoose.model('user', loginSchema);

module.exports = {
    Login,
};
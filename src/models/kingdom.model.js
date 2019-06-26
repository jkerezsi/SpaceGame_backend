const mongoose = require('mongoose');

const { Schema } = mongoose;

const Kingdom = new Schema({
  kingdomName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model('Kingdom', Kingdom);

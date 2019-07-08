const mongoose = require('mongoose');

const { Schema } = mongoose;

const Resources = new Schema({
  type: {
    type: String,
    enum: ['Food', 'Gold'],
    required: true,
  },
  amount: {
    type: Number,
    required: false,
    default: 1,
  },
  generation: {
    type: Number,
    required: false,
    default: 1,
  },
  UpdatedAt: {
    type: Number,
    required: false,
    default: new Date(),
  },
});


module.exports = mongoose.model('Resources', Resources);

const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const Buildings = mongoose.Schema({
  type: {
    type: String,
    enum: ['farm', 'mine', 'townhall'],
    required: true,
  },
  level: {
    type: Number,
    required: false,
    default: 1,
  },
  hp: {
    type: Number,
    required: false,
    default: 1,
  },
  started_at: {
    type: Number,
    required: false,
    default: new Date(),
  },
  finished_at: {
    type: Number,
    required: false,
    default: new Date(),
  },
});


module.exports = mongoose.model('Buildings', Buildings);

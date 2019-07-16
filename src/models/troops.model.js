const mongoose = require('mongoose');

// mongoose.set('useFindAndModify', false);

const Troops = mongoose.Schema({
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
  attack: {
    type: Number,
    required: false,
    default: 1,
  },
  defence: {
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
})

module.exports = mongoose.model('Troops', Troops);


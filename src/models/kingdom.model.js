const mongoose = require('mongoose');
const Resources = require('./resources.model').schema;
const Buildings = require('./building.model').schema;

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
  resources: [Resources],
  location: {
    type: Object,
    required: true,
    default: { status: 'unassigned' },
  },
  buildings: [Buildings],
});


module.exports = mongoose.model('Kingdom', Kingdom);

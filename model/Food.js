const number = require('@hapi/joi/lib/types/number');
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  kcal: {
    type: number,
    required: true
  },
  protein: {
    type: number,
    required: true
  },
  fat: {
    type: number,
    required: true
  },
  carbs: {
    type: number,
    required: true
  },
  sodium: {
    type: number,
    required: true
  },
  fiber: {
    type: number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  serving: {
    type: number,
    required: true
  },
  meal: {
    type: String,
    required: true
  },
  dayOfYear: {
    type: String,
    max: 8,
    min: 8
  }
});

module.exports = mongoose.model('Food', foodSchema);
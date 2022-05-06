const number = require('@hapi/joi/lib/types/number');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    lastName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    },
    kcalDaily: {
        type: number,
        default: 2000,
        required: false
    },
    weight: {
        type: number,
        required: false
    }
});

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true
    },
    password: {
        type: string,
        required: true
    },
    rePassword: {
        type: string,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)
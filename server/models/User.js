const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    likedBooks: [{
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    }],
    addedBooks: [{
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    }]
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)
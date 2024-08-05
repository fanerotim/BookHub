const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    hasLiked: {
        type: Boolean
    }
})

module.exports = mongoose.model('Book', bookSchema);
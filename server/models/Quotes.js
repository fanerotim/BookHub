const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
    author: {
        type: String,
        require: true
    },
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Quotes', quoteSchema)
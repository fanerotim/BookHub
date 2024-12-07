const mongoose = require('mongoose');
const Quote = require('../models/Quote');

exports.create = async (quoteDetails) => {

    // get quote
    const quote = quoteDetails.quote;

    //check if quote is already added
    const isAdded = await Quote.findOne({ quote })

    if (isAdded) {
        throw Error('This quote is already added to our database. Think of a different one.')
    }

    const newQuote = await Quote.create(quoteDetails);

    return newQuote;
}

exports.getAll = async () => {
    const quotes = await Quote.find();
    return quotes;
}

exports.search = async (author) => {
    //case-insensitive search
    const searchResult = await Quote.find({author: new RegExp(author, 'i')})
    return searchResult;
}
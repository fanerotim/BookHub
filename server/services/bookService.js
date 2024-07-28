const mongoose = require('mongoose');
const Book = require('../models/Book');

exports.create = async (bookDetails) => {
    
    const title = bookDetails.title;

    const isAdded = await Book.findOne({title});
    
    if (isAdded) {
        throw Error('This book is already added to our database. Please think of a new one.')
    }

    const newBook = await Book.create(bookDetails);
    return newBook;
}
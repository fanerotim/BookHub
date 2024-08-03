const mongoose = require('mongoose');
const Book = require('../models/Book');

exports.create = async (bookDetails) => {

    const title = bookDetails.title;

    const isAdded = await Book.findOne({ title });

    if (isAdded) {
        throw Error('This book is already added to our database. Please think of a new one.')
    }

    const newBook = await Book.create(bookDetails);
    return newBook;
}

exports.getAll = async () => {
    const books = await Book.find();
    return books;
}

exports.getOne = async (bookId) => {
    const book = await Book.findOne({ _id: bookId });
    return book;
}

exports.update = async (bookDetails) => {
    const updatedBook = await Book.findByIdAndUpdate(bookDetails._id, bookDetails)
    return updatedBook;
}

exports.delete = async (bookId) => {
    const deletedBook = await Book.findByIdAndDelete(bookId);
    return deletedBook;
}
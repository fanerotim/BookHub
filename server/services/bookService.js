const mongoose = require('mongoose');
const Book = require('../models/Book');
const User = require('../models/User');

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

exports.like = async (bookId, userId) => {

    // get book
    const book = await Book.findById(bookId);

    // check if book was already liked by user
    const hasLiked = book.likes.some(id => userId == id);
 
    // if liked already throw error, else update hasLiked to true
    if (hasLiked) {
        throw Error('Already liked book')
    } 
    
    // add bookId to the list of liked books
    await User.findByIdAndUpdate(userId, {$push: {likedBooks: bookId}})

    // update book's total number of likes by adding userId to the array
    await Book.findByIdAndUpdate(bookId, {$push: {likes: userId}});
    
    //get the updated book and return it to front-end
    const updatedBook = await Book.findById(bookId);

    return updatedBook; 
}
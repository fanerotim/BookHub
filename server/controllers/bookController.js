const router = require('express').Router();
const isGuest = require('../middlewares/isGuest');
const bookService = require('../services/bookService');

router.get('/library', async (req, res) => {

    try {
        const books = await bookService.getAll();
        return res.status(200).json(books);
    } catch(err) {
        return res.status(400).json({message: err.message})
    }
})

router.get('/library/:bookId', async (req, res) => {
    const bookId = req.params.bookId;

    try {
        const book = await bookService.getOne(bookId);
        return res.status(200).json(book)
    } catch(err) {
        return res.status(404).json({message: err.message})
    }
})

router.post('/add-book', isGuest, async (req, res) => {
    const bookDetails = req.body;

    // get ownerId;
    const ownerId = req.user._id;
    
    // add ownerId to new book object
    bookDetails.owner = ownerId;

    try {
        const newBook = await bookService.create(bookDetails);
        return res.status(200).json(newBook)
    } catch(err) {
        return res.status(409).json({message: err.message})
    }  
})

router.put('/:bookId/edit', async (req, res) => {
    const bookId = req.params.bookId;
    const bookDetails = req.body;

    try {
        const updatedBook = await bookService.update(bookDetails)
        return res.status(200).json(updatedBook);
    } catch(err) {
        return res.status(400).json({message: err.message})
    }
})

router.delete('/:bookId/delete', async (req, res) => {
    const bookId = req.params.bookId;

    try {
        const deletedBook = await bookService.delete(bookId);
        return res.status(200).json(deletedBook);
    } catch(err) {  
        return res.status(404).json({message: err.message})
    }
})

router.post('/:bookId/like', async (req, res) => {
    const bookId = req.params.bookId;
    const userId = req.user._id;

    try {
        const likedBook = await bookService.like(bookId, userId);
        return res.status(200).json(likedBook)
    } catch(err) {
        return res.status(400).json({message: err.message})
    }
})

module.exports = router;
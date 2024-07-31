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

router.post('/add-book', isGuest, async (req, res) => {
    const bookDetails = req.body;

    try {
        const newBook = await bookService.create(bookDetails);
        return res.status(200).json(newBook)
    } catch(err) {
        return res.status(409).json({message: err.message})
    }  
})

module.exports = router;
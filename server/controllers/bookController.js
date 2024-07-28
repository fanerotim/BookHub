const router = require('express').Router();
const isUser = require('../middlewares/isUser');
const User = require('../models/User');
const bookService = require('../services/bookService');

router.get('/', (req, res) => {
    return res.status(200).json({message: 'Successfully accessed the CATALOG route!'})
})

router.post('/add-book', isUser, async (req, res) => {
    const bookDetails = req.body;

    // TODO: create middleware that checks if the user is authenticated

    try {
        const newBook = await bookService.create(bookDetails);
        return res.status(200).json(newBook)
    } catch(err) {
        return res.status(409).json({message: err.message})
    }  
})

module.exports = router;
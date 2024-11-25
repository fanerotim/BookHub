const router = require('express').Router();
const quoteService = require('../services/quoteService');

router.post('/add', async (req, res) => {

    const quoteData = req.body;

    try {
        const newQuote = await quoteService.create(quoteData);
        return newQuote;
    } catch(err) {
        console.log(err)
        return err;
    }
})

module.exports = router;
const router = require('express').Router();
const quoteService = require('../services/quoteService');


router.get('/', async (req, res) => {
    
    try {
        const quotes = await quoteService.getAll();
        return res.status(200).json(quotes);
    } catch(ee) {
        return err;
    }
})

router.post('/add', async (req, res) => {

    const quoteData = req.body;

    try {
        const newQuote = await quoteService.create(quoteData);
        return res.status(200).json(newQuote);
    } catch(err) {
        return err;
    }
})



module.exports = router;
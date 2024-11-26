const router = require('express').Router();

const homeController = require('../controllers/userController')
router.use('/user', homeController)

const bookController = require('../controllers/bookController');
router.use('/books', bookController)

const quoteController = require('../controllers/quoteController');
router.use('/quotes', quoteController);
module.exports = router;
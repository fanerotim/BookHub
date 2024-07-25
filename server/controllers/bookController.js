const router = require('express').Router();

router.get('/', (req, res) => {
    return res.status(200).json({message: 'Successfully accessed the CATALOG route!'})
})

router.post('/add-new', (req, res) => {
    return res.status(200).json({message: 'Successfully accessed the ADD-NEW route!'})
})

module.exports = router;
const router = require('express').Router();

router.post('/login', (req, res) => {
    return res.status(200).json({message: 'Successfully accessed the LOGIN route'})
})

router.post('/register', (req, res) => {
    return res.status(200).json({message: 'Successfully accessed the REGISTER router'})
})

router.post('/', (req, res) => {
    console.log('PUT request')
})

router.delete('/account', (req, res) => {
    return res.status(200).json({message: 'Successfully accessed the DELETE route. This can be used to delete account.'})
})


module.exports = router;


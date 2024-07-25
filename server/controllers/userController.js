const userService = require('../services/userService');

const router = require('express').Router();

router.post('/login', (req, res) => {
    return res.status(200).json({message: 'Successfully accessed the LOGIN route'})
})

router.post('/register', async (req, res) => {
    const userDetails = req.body;

    try {
        const newUser = await userService.register(userDetails);
        const token = await userService.generateToken(newUser);

        return res.status(200).json({token, email: newUser.email, _id: newUser._id});

    } catch(err) {
        return res.status(400).json({message: err.message})
    } 
})

router.post('/', (req, res) => {
    console.log('PUT request')
})

router.delete('/account', (req, res) => {
    return res.status(200).json({message: 'Successfully accessed the DELETE route. This can be used to delete account.'})
})


module.exports = router;


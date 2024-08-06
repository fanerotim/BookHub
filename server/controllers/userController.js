const isGuest = require('../middlewares/isGuest');
const isUser = require('../middlewares/isUser');
const userService = require('../services/userService');

const router = require('express').Router();

router.post('/register', isUser, async (req, res) => {
    const userDetails = req.body;

    try {
        const newUser = await userService.register(userDetails);
        const token = await userService.generateToken(newUser);

        return res.status(200).json({token, email: newUser.email, _id: newUser._id});

    } catch(err) {
        return res.status(400).json({message: err.message})
    } 
})

router.post('/login', isUser, async (req, res) => {
    const loginDetails = req.body;

    try {
        const loggedUserDetails = await userService.login(loginDetails);
        const token = await userService.generateToken(loggedUserDetails);
        return res.status(200).json({token, email: loggedUserDetails.email, _id: loggedUserDetails._id})
    } catch (err) {
        return res.status(400).json({message: err.message})
    }  
})

router.post('/logout', isGuest, (req, res) => {
    req.user = null;

    return res.status(200).json({message: 'User has successfully logged out'})
})

router.get('/profile', async (req, res) => {
    const userId = req.user._id;

    try {
        const user = await userService.getUser(userId);
        return res.status(200).json(user);
    } catch(err) {
        res.status(404).json({message: err.message})
    }
})

// router.delete('/account', (req, res) => {
//     return res.status(200).json({message: 'Successfully accessed the DELETE route. This can be used to delete account.'})
// })


module.exports = router;


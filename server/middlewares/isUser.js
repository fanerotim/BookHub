const jwt = require('jsonwebtoken');

const isUser = (req, res, next) => {
    // this middleware protects routes that require auth

    // check if there is token
    const token = req.headers.accesstoken;

    // if no token - send error message and protect route
    if (!token) {
        return res.status(403).json({message: 'This route is only available to logged in users. Please log in and try again.'})
    }
}

module.exports = isUser;
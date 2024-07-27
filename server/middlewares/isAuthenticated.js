const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
    const accessToken = req.headers.accesstoken;

    if (!accessToken) {
        next();
    }

    try {
        const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
        req.user = decodedToken;
        next();
    } catch(err) {
        req.user = null;
        res.status(403).json({message: 'Invalid web token! Please log in again.'})
    }
    
}

module.exports = isAuthenticated;
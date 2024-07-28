const isUser = (req, res, next) => {

    const token = req.headers.accesstoken;

    // this middleware protects guest routes from authorized users
   
    if (token) {
        return res.status(403).json({message: 'You have already logged in. This route is for guest users.'})
    }
    return next();
}

module.exports = isUser;
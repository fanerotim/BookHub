const express = require('express')
require('dotenv').config()
const cors = require('cors');
const isAuthenticated = require('../middlewares/isAuthenticated');

const expressConfig = (app) => {
    app.use(isAuthenticated);
    app.use(express.json())

    app.use(cors({
        origin: 'https://book-hub.fanerotim.com',
        credentials: true
    }))


    return app;
}

module.exports = expressConfig;
const express = require('express')
require('dotenv').config()
const cors = require('cors');
const isAuthenticated = require('../middlewares/isAuthenticated');

const expressConfig = (app) => {
    app.use(isAuthenticated);
    app.use(express.json())

    app.use(cors({
        // prod
        origin: 'https://book-hub.fanerotim.com',
        // dev
        // origin: 'http://localhost:5173',
        
        credentials: true
    }))

    console.log(process.env.NODE_ENV)
    return app;
}

module.exports = expressConfig;

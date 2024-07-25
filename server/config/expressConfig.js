const express = require('express')
require('dotenv').config()
const cors = require('cors');

const expressConfig = (app) => {
    app.use(express.json())

    app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true
    }))

    return app;
}

module.exports = expressConfig;
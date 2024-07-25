const express = require('express')
require('dotenv').config()

const expressConfig = (app) => {
    app.use(express.json())

    return app;
}

module.exports = expressConfig;
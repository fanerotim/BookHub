const express = require('express')
const mongoose = require('mongoose')
const expressConfig = require('./config/expressConfig')

const app = express();
expressConfig(app);

const routes = require('./router/routes');
app.use(routes);

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
    .then(result => {
        console.log('DB connected successfully')
        
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.PORT}`)
        })
    })
    .catch(err => console.log(err.message))

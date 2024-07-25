const express = require('express')
const routes = require('./router/routes');

const app = express();
const port = 3000;

//express config
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

app.use(routes);

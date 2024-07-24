const express = require('express')

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

app.get('/', (req, res) => {
    console.log('this route was reached')
    res.send('We start building our server today, but it does not hotreload')
})

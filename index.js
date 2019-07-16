const express = require('express')
const app = express()
const port = '5000'

app.get('/', (req, res) => {
    res.send('Test')
})

app.listen(port, () => {
    console.log(`listen port: ${port}`);
})
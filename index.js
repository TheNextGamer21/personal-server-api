const express = require('express')
const path = require('path')
const root = require(path.join(__dirname, 'API', 'root.js'))
const app = express()
const PORT = 80

app.use(express.json())
app.disable('x-powered-by')


root(app)



app.listen(PORT)
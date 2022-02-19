// Require the express module
const express = require('express')

// Require the path module for joining directory and filenames
const path = require('path')

// Require the config for the API
const config = require(path.join(__dirname, 'data', 'config.js'))

const root = require(path.join(__dirname, 'API', 'root.js'))

// Define the express app
const app = express()

// Set express app to json for REST API
app.use(express.json())
app.disable('x-powered-by')


root(app)


// Define the port for the API to listen on
app.listen(config.port)
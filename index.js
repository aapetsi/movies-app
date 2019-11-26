require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const users = require('./routes/api/users')

const app = express()

// body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// cors middleware
app.use(cors())

// routes middleware
app.use('/api/users', users)

module.exports = app

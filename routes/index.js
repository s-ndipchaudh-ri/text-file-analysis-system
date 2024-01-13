const express = require('express')
const app = express()

const file = require('./file')


app.use('/file',file)

module.exports = app;
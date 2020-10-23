require('dotenv').config()

const http = require('http')
const express = require('express')
const app = express()

const cors = require('cors')
const blogRouter = require('./controllers/blog')
const Blog = require('./models/blog')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
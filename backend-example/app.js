// when connection is imported, file is run giving us access to connection
require('./database/connection')

const express = require('express')
const cors = require('cors')

const projectRoutes = require('./routes/projectRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello from homepage.'))

app.use('/projects', projectRoutes)

module.exports = app

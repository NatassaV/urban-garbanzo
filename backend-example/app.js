// when connection is imported, file is run giving us access to connection
require('./database/connection.js')

const express = require('express')
const cors = require('cors')

const projectRoutes = require('./routers/project.router.js')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/projects', projectRoutes)

app.get('/', (req, res) => res.send('Hello from homepage.'))


module.exports = app

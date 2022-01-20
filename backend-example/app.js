const mongoose = require('mongoose')
require('dotenv').config()
const dbConfig = require('./db.config')

const express = require('express')
const cors = require('cors')

const projectRoutes = require('./routes/projectRoutes')

const app = express()

const PORT = process.env.PORT
const PASS = process.env.PASS
const dbURI = process.env.URL

const options = {
  sslKey: PASS,
  sslCert: PASS,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose
  .connect(dbURI, options)
  .then(function (result) {
    console.log('Database is connected')
  })
  .catch((err) => console.log(err))

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello from homepage.'))
app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))

app.use('/projects', projectRoutes)

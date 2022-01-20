const mongoose = require('mongoose')
require('dotenv').config()

const express = require('express')
const cors = require('cors')

const projectRoutes = require('./routes/projectRoutes')

const app = express()
app.use(cors())
app.use(express.json())


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



app.get('/', (req, res) => res.send('Hello from homepage.'))

app.use('/projects', projectRoutes)

module.exports = app
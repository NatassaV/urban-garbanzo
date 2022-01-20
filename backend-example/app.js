const mongoose = require('mongoose')
const dbConfig = require('./db.config')

const express = require('express')
const cors = require('cors')

const projectRoutes = require('./routes/projectRoutes')
const bodyParser = require('body-parser')

const app = express()
const PORT = 8080

const credentials = dbConfig.credentials

// Connection String to MongoDB
const dbURI = dbConfig.url

const options = {
  sslKey: credentials,
  sslCert: credentials,
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

app.get('/', (req, res) => res.send('Hello from homepage.'))
app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))

app.use(bodyParser.json())
app.use('/projects', projectRoutes)

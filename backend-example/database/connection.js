const mongoose = require('mongoose')
require('dotenv').config()

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
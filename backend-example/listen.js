require('dotenv').config()
const PORT = process.env.PORT
const app = require('./app.js')

app.listen(PORT, (err) => {
  if (err) throw err
  console.log(`Server Running on port: ${PORT}`)
})

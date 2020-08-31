const express = require('express')
const app = express()

const routes = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }) )

app.use('/person', routes.person)

const port = 8080

app.listen(port, (err, connect) => {
  if (err){ throw err }
  console.log(`Connect to port ${port}`)
})
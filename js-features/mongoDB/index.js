require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors('*'))

const routes = require('./routes/index')

app.use('/users', routes.users)

app.listen(process.env.PORT, (err) => {
  if(err) throw err
  console.log(`The server is listening at port ${process.env.PORT}`)
})

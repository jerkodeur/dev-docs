const express = require('express')
const app = express()
const mongoose = require('mongoose')

const db = require('./connexion')

const Person = require('./PersonShema')

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })

const port = 8080

app.listen(port, (err, connect) => {
  if (err){ throw err }
  console.log(`Connect to port ${port}`)
})
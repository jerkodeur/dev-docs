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
// const { MongoClient } = require('mongodb')

// const url = "mongodb://localhost:27017/twist"

// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })

// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
//   if(err) throw err
//   db.db().collection('essai2', (err, collection) => {
//     if (err) throw err
//     const collectionName = collection.collectionName
//     console.log(`Connected to ${collectionName} db`)
//     collection.findOne({firstname: 'Gérald'}, (err, results) => { // search Gérald
//       if(err) throw err
//       console.log('fetchOne', results)
//     })
//   })
// })

// const connection = client.connect(async (err, db) => {
//   try {
//     console.log('You are connected')
//     const collection = await client.db().collection('essai2') // Connect to the collection
//     const insertOne = await collection.insertOne({ firstname: 'Hervé', lastname: 'Coquelin' }) // Insert a document in the collection
//     const insertMany = await collection.insertMany([{firstname: 'Gérald'}, {firstname: 'Claude'}]) // Insert Many documents
//     const oneAdded = await insertOne.ops[0].firstname // fetch the firstname added
//     const manyAdded = await insertMany.ops // fetch the many documents inserted
//     console.log(`${oneAdded} added to the bdd`)
//     console.log(manyAdded)
//     collection.find({firstname:{}}, (err, results) => {
//       if(err) throw err
//       return results
//     })
//   } catch (err) {
//     if (err) throw err
//   } finally {
//     client.close() // close the connection
//   }
// })

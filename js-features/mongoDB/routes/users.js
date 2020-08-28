const express = require('express')
const mongodb = require('mongodb')
const router = express.Router()

const connexion = require('../conf')

//TODO find() ...all
router.get('/', (req, res) => {
  connexion
    .then(connect => {
      connect.db().collection('essai2', (err, collection) => {
        if (err) throw err
        //? return all documents which match with the filter {},{age: {$lt: 5}} ...
        collection.find().limit(5).toArray((err, results) => { //TODO limit()
          if (err) throw err
          return res.json(results)
        })
      })
    })
    .catch(err => console.log(err))
})
//TODO findOne()
router.get('/:id', (req, res) => {
  connexion
    .then(connect => {
      connect.db().collection('test', (err, collection) => {
        if (err) throw err
        //? return the first document which matching with the filter
        collection.findOne({ '_id': new mongodb.ObjectID(req.params.id) }, (err, results) => {
          if (err) throw err
          return res.json(results)
        })
      })
    })
    .catch(err => console.log(err))
})
//TODO insertOne()
router.post('/', (req, res) => {
  connexion
    .then(async connect => {
      try {
        //? insert one document ex: {firstname: Jérôme, lastname: Potié}
        const request = await connect.db().collection('test').insertOne(req.body)
        res.status(201).send(request.ops[0])
      } catch (err) {
        res.status(500).send(err)
      }
    })
    .catch(err => res.status(500).send(err))
})
//TODO insertMany()
router.post('/', (req, res) => {
  connexion
    .then(async connect => {
      try {
        //? Insert many documents ex: [{document: A}, {document: B}, {document: C}]
        const request = await connect.db().collection('test').insertMany(req.body)
        res.status(201).send(request.ops[0])
      } catch (err) {
        res.status(500).send(err)
      }
    })
    .catch(err => res.status(500).send(err))
})
//TODO updateOne()
router.put('/', (req, res) => {
  connexion
    .then(async connect => {
      try {
        const collection = await connect.db().collection('essai2')
        const request = await collection.updateOne(
          { firstname: req.body.firstname }, // filter
          {
            $set: { firstname: req.body.replace, email: 'jerome.potie@gmail.com' }, // fields to modify or add new fields
            $currentDate: { lastModified: true } // Insert the last updated for the current document
          },
          //! if no match found, created a new document (option)
          { upsert: true }) //TODO upsert option
        res.status(200).json(request)
      } catch (err) {
        res.status(500).json(err)
      }
    })
})
//TODO updateMany()
router.put('/all', (req, res) => {
  connexion
    .then(async connect => {
      try {
        const collection = await connect.db().collection('essai2')
        const request = await collection.updateMany(
          { firstname: req.body.firstname }, //? filter
          {
            $set: { firstname: req.body.replace }, //? fields to modify or add new fields
            $currentDate: { lastModified: true } //? Insert the last updated for the current document
          })
        res.status(200).json(request)
      } catch (err) {
        res.status(500).json(err)
      }
    })
})
//TODO replaceOne()
router.put('/replace', (req, res) => {
  connexion
    .then(async connect => {
      try {
        const collection = await connect.db().collection('essai2')
        //? Replace a document by another one
        const request = await collection.replaceOne(
          { prénom: req.body.firstname }, // filter
          { firstname: 'replaced!', lastname: 'now' }) // New document
        res.status(200).json(request)
      } catch (err) {
        res.status(500).json(err)
      }
    })
})
//TODO deleteOne()
router.delete('/:firstname', (req, res) => {
  connexion
  .then(async connect => {
    try{
      //? delete one collection
      const request = await connect.db().collection('essai2').deleteOne({prénom: req.params.firstname})
      res.status(200).json(request.result)
    } catch(err) {
      res.status(500).json(err)
    }
  })
})
//TODO deleteMany()
router.delete('/many/:firstname', (req, res) => {
  connexion
    .then(async connect => {
      try {
        //? delete many(all) collection
        const request = await connect.db().collection('essai2').deleteMany({firstname: req.params.firstname})
        res.status(200).json(request.result)
      } catch (err) {
        res.status(500).json(err)
      }
    })
})
module.exports = router

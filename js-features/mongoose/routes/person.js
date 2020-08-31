const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const connexion = require('../connexion')

const Person = require('../models/Person.model')
const { query } = require('express')

//TODO insertOne()
router.post('/', (req, res) => {
  connexion
    .then(() => {
      //TODO create the new document with body datas
      const newPerson = new Person({ ...req.body })
      //TODO Add the new document to mongodb
      newPerson.save((err) => {
        if (err) { throw TypeError('save', 'Error when add new person to mongoDb') }
        //TODO Close the connection
        mongoose.connection.close()
        res.status(201).json(newPerson)
      })
    })
    .catch(err => console.log(err))
})

//TODO get()
router.get('/', (req,res) => {
  connexion
  .then(() => {
    var query = Person.find(null)
    //TODO limit number of results
    query.limit(10)
    query.exec((err, person)=> {
      if (err) { throw console.log(err) }
      res.status(200).json(person)
    })
  })
})

//TODO find where
router.get('/:firstname', (req, res) => {
  connexion
    .then(() => {
      var query = Person.find(null)
      //TODO use where option
      query.where('firstname', req.params.firstname)
      query.exec((err, person) => {
        if (err) { throw console.log(err) }
        res.status(200).json(person)
      })
    })
})

//TODO updateMany
router.put('/:firstname', (req, res) => {
  connexion
    .then(() => {
      Person.updateMany({firstname: req.params.firstname}, {firstname: 'Jérôme'}, (err, result) => {
        if (err) { throw console.log(err) }
        res.status(200).json(result)
      })
    })
})

//TODO delete
router.delete('/:firstname', (req, res) => {
  connexion
    .then(() => {
      Person.remove({ firstname: req.params.firstname }, (err, done) => {
        if (err) { throw console.log(err) }
        res.status(200).json(done)
      })
    })
})

module.exports = router
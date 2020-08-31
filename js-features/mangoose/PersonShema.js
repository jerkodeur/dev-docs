//TODO requirements
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//TODO Define a collection schema
const PersonSchema = new Schema({
  //* Define type of values schema
  firstname: {
    type: String,
    required: true, // Define if required... default: false
  },
  age: Number,
  isMajor: Boolean,
  email: {
    type: String,
    unique: true, // If The value must be uniq
    required: true
  },
  date: {
    type: Date,
    default: Date.now // Define a default value
  },
  default: {
    type: Schema.ObjectId, // connect to another schema
    ref: 'User'
  },
  // Embedded sub-documents
  other: {
    town: String,
    Country: String,
    Birthday: Date
  }
})

//TODO Export Schema
module.exports = mongoose.model('Person', PersonSchema)
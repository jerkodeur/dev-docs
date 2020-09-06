const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const url = 'mongodb://localhost/mongoose'

// Connexion
const connexion = mongoose.connect(url, { useUnifiedTopology: true })

module.exports = connexion

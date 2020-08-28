const MongoClient = require('mongodb')

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_MONGO_CLUSTER}.gmt4b.mongodb.net/${process.env.DB_MONGO_CLUSTER}?retryWrites=true&w=majority`
const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_LOCAL_NAME}`

// Connexion
const connexion = MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = connexion
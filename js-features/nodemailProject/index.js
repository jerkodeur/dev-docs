const express = require('express')
const app = express()

const { transporter, mailOptions} = require('./service/mailConfig')

require ('dotenv').config()

transporter.sendMail(mailOptions, (err,data) => {
    if (err) {
        return console.log("Erreur:" + err)
    }
    return console.log("L'email a été envoyé avec succès");
})


app.listen(process.env.PORT, (err) => {
    if (err) {
        throw('Une erreur est survenue', err)
    }
    return console.log(`Le serveur écoute sur le port ${process.env.PORT}`)
})
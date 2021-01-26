const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
})

const mailOptions = {
    from: 'jerome.potie@gmail.com',
    to: 'jerome.potie@gmail.com',
    subject: 'Nodemailer Project',
    text: 'Bienvenue dans Nodemailer'
}

module.exports =  {
    transporter,
    mailOptions
}
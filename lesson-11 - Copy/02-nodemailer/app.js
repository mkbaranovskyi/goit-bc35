const nodemailer = require("nodemailer")
require("dotenv").config()

const { MAIL_SENDER_PASSWORD, MAIL_SENDER_HOST, MAIL_SENDER_PORT, MAIL_SENDER_EMAIL } = process.env;

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // 25, 465, 2525
    secure: false,
    auth: {
        user: "kostortitus@gmail.com",
        pass: META_PASSWORD,
    }
})

const email = {
    to: "vereye1980@mustbeit.com",
    from: "kostortitus@gmail.com",
    subject: "Verify your email",
    html: `<p>Your verification code: <b>${Math.round(Math.random() * 1000000)}</b></p>`
}

transport.sendMail(email)
    .then(() => console.log("Email send success"))
    .catch(error => console.log(JSON.stringify(error, null, 2)))
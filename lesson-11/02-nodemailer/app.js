require('dotenv').config()
const nodemailer = require("nodemailer")

const { MAIL_SENDER_PASSWORD, MAIL_SENDER_HOST, MAIL_SENDER_PORT, MAIL_SENDER_EMAIL } = process.env

const transporter = nodemailer.createTransport({
  host: MAIL_SENDER_HOST,
  port: MAIL_SENDER_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: MAIL_SENDER_EMAIL,
    pass: MAIL_SENDER_PASSWORD,
  },
})

async function sendEmail() {
  try {
    await transporter.sendMail({
      from: MAIL_SENDER_EMAIL,
      to: "fokal82334@saeoil.com",
      subject: "Hello",
      html: "<p>Verify your email</p>",
    })

    console.log('Email is sent')
  } catch (error) {
    console.error(error)
  }
}

sendEmail()
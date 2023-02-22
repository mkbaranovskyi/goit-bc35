const nodemailer = require("nodemailer");
const { createHttpException } = require('../../helpers');

const { MAIL_SENDER_PASSWORD, MAIL_SENDER_HOST, MAIL_SENDER_PORT, MAIL_SENDER_EMAIL } = process.env;

const transport = nodemailer.createTransport({
  host: MAIL_SENDER_HOST,
  port: MAIL_SENDER_PORT, // 587, 465, 25, 2525
  secure: false,
  auth: {
    user: MAIL_SENDER_EMAIL,
    pass: MAIL_SENDER_PASSWORD,
  }
})

const sendEmailVerificationLetter = async (userEmail, verificationToken) => {
  const verificationUrl = `http://localhost:3000/api/auth/email/verify/${verificationToken}`;

  const email = {
    to: userEmail,
    from: MAIL_SENDER_EMAIL,
    subject: "Verify your email",
    html: `<a href="${verificationUrl}" target="_blank">Click to verify your email</a>`,
  }

  try {
    await transport.sendMail(email)
  } catch (error) {
    throw createHttpException(502, `Nodemailer error: ${JSON.stringify(error, null, 2)}`)
  }
}

module.exports = {
  sendEmailVerificationLetter,
}
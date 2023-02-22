const { createHttpException } = require('../../helpers');
const { UserModel } = require('../../models');
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const { createAccessToken } = require('../../services/jwt');
const { nanoid } = require('nanoid');
const { sendEmailVerificationLetter } = require('../../services/email')

const signUp = async (req, res) => {
  const { firstname, email, password } = req.body;

  const existingUser = await UserModel.findOne({ email })
  if (existingUser) {
    throw createHttpException(409, 'This email is already taken')
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const emailVerificationToken = nanoid(30)
  const sessionKey = crypto.randomUUID()

  const userInstance = await UserModel
    .create({
      firstname,
      email,
      passwordHash,
      sessionKey,
      emailVerificationToken,
    })
    .catch((err) => {
      throw createHttpException(400, err.message)
    })

  await sendEmailVerificationLetter(email, emailVerificationToken)

  const accessToken = createAccessToken({ userId: userInstance._id, sessionKey })

  res.status(201).json({
    accessToken,
  })
}

module.exports = {
  signUp,
}
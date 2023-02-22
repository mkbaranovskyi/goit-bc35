const { createHttpException } = require('../../helpers');
const { UserModel } = require('../../models');
const bcrypt = require('bcrypt')
const { createAccessToken } = require('../../services/jwt');
const { nanoid } = require('nanoid');
const { sendEmailVerificationLetter } = require('../../services/email');

const signUp = async (req, res, next) => {
  const conflictMessage = 'User already exists'

  const { firstname, email, password } = req.body;

  const userInstance = await UserModel.findOne({ email })
  if (userInstance) {
    throw createHttpException(409, conflictMessage)
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const sessionKey = nanoid()
  const emailVerificationToken = nanoid(30)

  const newUser = await UserModel.create({ firstname, email, passwordHash, sessionKey, emailVerificationToken })

  await sendEmailVerificationLetter(email, emailVerificationToken)

  const accessToken = createAccessToken({
    userId: newUser._id,
    sessionKey,
  })

  res.status(201).json({
    accessToken,
  })
}

module.exports = {
  signUp,
}
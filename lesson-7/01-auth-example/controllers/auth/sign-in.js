const { createHttpException } = require('../../helpers');
const { UserModel } = require('../../models');
const bcrypt = require('bcrypt')

const signIn = async (req, res, next) => {
  const unauthorizedMessage = 'Invalid email or password'

  const { email, password } = req.body;

  const userInstanceOrNull = await UserModel.findOne({ email })
  if (userInstanceOrNull === null) {
    throw createHttpException(401, unauthorizedMessage)
  }

  const isValidPassword = await bcrypt.compare(password, userInstanceOrNull.passwordHash)
  if (!isValidPassword) {
    throw createHttpException(401, unauthorizedMessage)
  }

  // TODO 07.02.2023: Change to the real JWT
  const accessToken = 'asdflkjlasdf'

  res.json({ accessToken })
}

module.exports = {
  signIn,
}
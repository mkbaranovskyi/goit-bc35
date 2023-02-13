const { createHttpException } = require('../../helpers');
const { UserModel } = require('../../models');
// const { createHash } = require('../../services/books/crypto');
const bcrypt = require('bcrypt')
const { createAccessToken } = require('../../services/jwt');

const signUp = async (req, res, next) => {
  const unauthorizedMessage = 'User already exists'

  const { firstname, email, password } = req.body;

  // const userModelOrNull = await UserModel.findOne({ email })
  // if (userModelOrNull) {
  //   throw createHttpException(401, unauthorizedMessage)
  // }

  // const passwordHash = await createHash(password)
  const passwordHash = await bcrypt.hash(password, 10)

  const userInstance = await UserModel.create({ firstname, email, passwordHash })
    .catch(() => {
      throw createHttpException(401, unauthorizedMessage)
    })

  const accessToken = createAccessToken({ userId: userInstance._id })

  res.status(201).json({
    accessToken,
  })
}

module.exports = {
  signUp,
}
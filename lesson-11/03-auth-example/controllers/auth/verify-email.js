const { createHttpException } = require('../../helpers')
const { UserModel } = require('../../models')

const verifyEmail = async (req, res) => {
  const { emailVerificationToken } = req.params

  const userInstance = await UserModel.findOne({ emailVerificationToken })
  if (!userInstance) {
    throw createHttpException(404, 'User is not found')
  }

  await UserModel.findByIdAndUpdate(
    userInstance._id,
    {
      isEmailVerified: true,
      emailVerificationToken: null,
    },
  )

  res.status(200).json({ message: 'Email is verified' })
}

module.exports = {
  verifyEmail,
}
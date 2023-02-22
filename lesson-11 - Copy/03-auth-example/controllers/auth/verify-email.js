const { createHttpException } = require('../../helpers')
const { UserModel } = require('../../models')

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params

  const userInstance = await UserModel.findOne({ verificationToken })
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

  res.json({ message: 'Verification is successful' })
}

module.exports = {
  verifyEmail,
}
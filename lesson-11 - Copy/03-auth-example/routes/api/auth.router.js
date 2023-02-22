const express = require('express')
const authController = require('../../controllers/auth')
const { controllerExceptionWrapper } = require('../../helpers')
const { userSignUpSchema, userSignInSchema } = require('../../helpers/schemas')
const { validateBody, authUser } = require('../../middlewares')

const router = express.Router()

router
  .post(
    '/sign-up',
    validateBody(userSignUpSchema),
    controllerExceptionWrapper(authController.signUp),
  )
  .post(
    '/sign-in',
    validateBody(userSignInSchema),
    controllerExceptionWrapper(authController.signIn),
  )
  .post(
    '/logout',
    authUser,
    controllerExceptionWrapper(authController.logout),
  )
  .get(
    '/email/verify/:verificationToken',
    controllerExceptionWrapper(authController.verifyEmail),
  )

module.exports = router

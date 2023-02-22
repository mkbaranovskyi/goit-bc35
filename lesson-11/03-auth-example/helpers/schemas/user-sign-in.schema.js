const Joi = require('joi');

const userSignInSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(8)
    .max(30)
    .required(),
})

module.exports = {
  userSignInSchema,
}
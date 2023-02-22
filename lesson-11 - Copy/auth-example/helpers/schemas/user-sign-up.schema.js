const Joi = require('joi');

const userSignUpSchema = Joi.object({
  firstname: Joi.string()
    .min(1)
    .max(30)
    .required(),

  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(8)
    .max(30)
    .required(),
})

module.exports = {
  userSignUpSchema,
}
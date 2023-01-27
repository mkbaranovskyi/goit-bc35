const Joi = require('joi');

const addBookSchema = Joi.object({
  author: Joi.string()
    .min(1)
    .max(30)
    .required(),

  title: Joi.string()
    .min(1)
    .max(30)
    .required(),
})

module.exports = {
  addBookSchema,
}
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

  genre: Joi.string()
    .required(),

  favorite: Joi.bool(),

  isbn: Joi.string()
    .pattern(/^[0-9-]{10,20}$/)
    // .pattern(new RegExp('^[0-9-]{10,20}$'))
    .required(),
})

module.exports = {
  addBookSchema,
}
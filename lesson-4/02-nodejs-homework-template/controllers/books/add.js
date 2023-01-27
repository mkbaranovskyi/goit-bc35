const booksRepository = require('../../models/books')
// const { createHttpException } = require('../../helpers')
// const { addBookSchema } = require('../../helpers/schemas')

const add = async (req, res, next) => {
  // const { error } = addBookSchema.validate(req.body)
  // if (error) {
  //   throw createHttpException(400, error.message)
  // }

  const { author, title } = req.body
  const result = await booksRepository.create({ author, title })
  res.json(result)
}

module.exports = {
  add,
}
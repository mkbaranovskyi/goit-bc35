const booksRepository = require('../../models/books')
const { createHttpException } = require('../../helpers')
const { addBookSchema } = require('../../helpers/schemas')

const updateById = async (req, res, next) => {
  try {
    const { id } = req.params
    const { author, title } = req.body

    const { error } = addBookSchema.validate({ author, title })
    if (error) {
      throw createHttpException(400, error.message)
    }

    const result = await booksRepository.updateById(id, { author, title })
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  updateById,
}
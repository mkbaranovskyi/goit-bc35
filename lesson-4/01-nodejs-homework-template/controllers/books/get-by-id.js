const booksRepository = require('../../models/books')

const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await booksRepository.getById(id)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getById,
}
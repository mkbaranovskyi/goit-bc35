const booksRepository = require('../../models/books')

const getAll = async (req, res, next) => {
  try {
    const result = await booksRepository.getAll()
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
}
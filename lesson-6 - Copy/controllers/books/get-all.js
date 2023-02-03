const booksRepository = require('../../models/books')

const getAll = async (req, res, next) => {
  const result = await booksRepository.getAll()
  res.json(result)
}

module.exports = {
  getAll,
}
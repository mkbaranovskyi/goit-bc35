const booksRepository = require('../../models/books')

const getById = async (req, res, next) => {
  const { id } = req.params
  const result = await booksRepository.getById(id)
  res.json(result)
}

module.exports = {
  getById,
}
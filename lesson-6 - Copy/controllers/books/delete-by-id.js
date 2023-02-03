const booksRepository = require('../../models/books')

const deleteById = async (req, res, next) => {
  const { id } = req.params

  await booksRepository.removeById(id)
  res.status(204).send()
}

module.exports = {
  deleteById,
}
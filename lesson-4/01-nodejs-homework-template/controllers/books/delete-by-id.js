const booksRepository = require('../../models/books')

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params

    await booksRepository.removeById(id)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  deleteById,
}
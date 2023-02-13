const { BookModel } = require('../../models/book.model')

const deleteById = async (req, res, next) => {
  const { id } = req.params

  await BookModel.findByIdAndDelete(id)
  res.status(204).send()
}

module.exports = {
  deleteById,
}
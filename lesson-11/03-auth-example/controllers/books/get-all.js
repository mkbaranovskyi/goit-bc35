const { BookModel } = require('../../models/book.model')
const bookService = require('../../services/books')

const getAll = async (req, res, next) => {
  const bookModels = await BookModel.find({})

  const response = bookService.mapOutputModels(bookModels)
  res.json(response)
}

module.exports = {
  getAll,
}
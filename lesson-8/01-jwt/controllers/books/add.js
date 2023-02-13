const { BookModel } = require('../../models/book.model')

const add = async (req, res, next) => {
  const { _id } = req.user
  const { author, title, genre, isbn } = req.body
  // const result = await booksRepository.create({ author, title })
  const result = await BookModel.create({ author, title, genre, isbn, owner: _id })
  res.status(201).json(result)
}

module.exports = {
  add,
}
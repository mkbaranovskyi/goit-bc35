const { BookModel } = require('../../models/book.model')
const { createHttpException } = require('../../helpers')

const getById = async (req, res, next) => {
  const { id } = req.params
  // const result = await BookModel.find({ _id: mongoose.Types.ObjectId(id) })[0]
  // const result = await BookModel.findOne({ _id: mongoose.Types.ObjectId(id) })
  // const result = await BookModel.findById(id, 'author title')
  // const result = await BookModel.findById(id, '-author -title')
  const result = await BookModel.findById(id)
  if (!result) {
    throw createHttpException(404, 'The book is not found')
  }

  res.json(result)
}

module.exports = {
  getById,
}
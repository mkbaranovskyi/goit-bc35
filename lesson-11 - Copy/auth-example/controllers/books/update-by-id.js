const { BookModel } = require('../../models/book.model')
// const mongoose = require('mongoose')

const updateById = async (req, res, next) => {
  const { id } = req.params
  const { author, title, genre, isbn } = req.body

  // const result = await BookModel.updateOne({ _id: mongoose.Types.ObjectId(id) }, { author, title, genre, isbn })
  const result = await BookModel.findByIdAndUpdate(id, { author, title, genre, isbn }, { new: true })

  res.json(result)
}

module.exports = {
  updateById,
}
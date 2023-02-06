const mongoose = require('mongoose')
const { BOOK_GENRE } = require('../helpers/enums')

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  genre: {
    type: String,
    // enum: ['detective', 'fantasy'],
    enum: Object.values(BOOK_GENRE),
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    match: /^[0-9-]{10,20}$/,
  },
}, {
  versionKey: false,
  timestamps: {
    createdAt: true,
    updatedAt: false,
  },
})

// book => books
const BookModel = mongoose.model('books', bookSchema)

module.exports = {
  BookModel,
}

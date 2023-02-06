function mapOutputModels(bookModels) {
  return bookModels.map((bookModel) => {
    const { _id, ...book } = bookModel.toObject()

    book.id = _id.toString()

    return book
  })
}

module.exports = {
  mapOutputModels,
}

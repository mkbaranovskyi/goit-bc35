const express = require('express');
const bookList = require('../book-list');

const router = express.Router();

router.get('/', function (req, res) {
  res.send(bookList);
});

router.get('/:id', function (req, res) {
  const book = bookList.find((book) => req.params.id === book.id);

  if (!book) {
    res.status(404).send('The book is not found');
    return;
  }

  res.status(200).send(book);
});

module.exports = router;
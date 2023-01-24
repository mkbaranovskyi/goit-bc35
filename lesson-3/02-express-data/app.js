const express = require('express');
const bookList = require('./book-list');
const PORT = 3000;

const app = express(); // web-server

app.get('/books', function (req, res) {
  res.send(bookList);
});

// app.get('/contacts', function (req, res) {
//   res.send('<h2>Contacts page</h2>');
// });

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
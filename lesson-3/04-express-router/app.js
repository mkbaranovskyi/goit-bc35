const express = require('express');
const cors = require('cors');
const PORT = 3000;
const booksRouter = require('./routes/books');

const bookList = require('./book-list');

const app = express(); // web-server

app.use(cors());

app.use('/books', booksRouter);
// app.use('/restaurants', restaurantRouter);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
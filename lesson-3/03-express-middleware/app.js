const express = require('express');
const { DateTime } = require('luxon');
const bookList = require('./book-list');
const PORT = 3000;
const fsp = require('fs/promises');
const cors = require('cors');

const serverSecret = 'secret';

const app = express(); // web-server

app.use(cors());
// app.use((req, res, next) => {
//   const secret = req.headers.authorization;
//   if (serverSecret === secret) {
//     next();
//   }

//   res.status(401).send();
// });

app.use(async (req, res, next) => {
  const now = DateTime.utc().toISO();

  await fsp.appendFile('./public/server.log', `\n${req.method} ${req.url} ${now}`);

  next();
});

app.get('/books', function (req, res) {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(bookList);
});

app.get('/api/v1/contacts', async (req, res) => {
  const bookId = req.params.id;

  const book = bookList.find((book) => book.id === bookId);
  if (!book) {
    res.send(404).send('The book is not found');
    return;
  }

  console.log(book);

  res.status(200).json(null);
  return;
});

app.get('/api/v2/contacts', async (req, res) => {
  const bookId = req.params.id;

  const book = bookList.find((book) => book.id === bookId);
  if (!book) {
    res.send(404).send('The book is not found');
    return;
  }

  console.log(book);

  res.status(200).json(null);
  return;
});

app.get('/books/author', function (req, res) {
  res.send(bookList);
});

app.get('/contacts', function (req, res) {
  res.send('<h2>Contacts page</h2>');
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
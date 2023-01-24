const express = require("express");
const bookList = require('./book-list');

const app = express(); // web-server

app.get("/books", (req, res) => {
  // res.json(null);
  // res.send(null);
  // res.send(bookList);
  res.json(bookList);
});

// app.get("/contacts", (req, res) => {
//   console.log('Method: ', req.method);
//   console.log('URL: ', req.url);
//   res.send("<h2>Contacts page</h2>")
// })

app.listen(3000, () => console.log("The server is running"));
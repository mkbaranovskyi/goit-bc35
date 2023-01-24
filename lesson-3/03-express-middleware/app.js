const express = require("express");
const bookList = require('./book-list');
const { DateTime } = require('luxon');
const fsp = require('fs/promises');
const cors = require("cors")

const app = express(); // web-server

// const corsMiddleware = cors();
// app.use(corsMiddleware)
app.use(cors());

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = DateTime.utc().toISO();
  await fsp.appendFile("./public/server.log", `\n${method} ${url} ${date}`);
  next();
})

// app.use((req, res, next) => {
//   console.log('1st middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('2nd middleware');
//   next();
// });

app.get("/books", (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(bookList);
});

app.post("/books", (req, res) => {
  // Додамо книгу в нашу БД...

  // Повернемо результат:
  res.json({
    id: "zCd_RioNMOBaQwAXnc8Px",
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
  });
});

app.listen(3000, () => console.log("The server is running"));
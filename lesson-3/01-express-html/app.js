const express = require("express");

const app = express(); // web-server

app.get("/", (req, res) => {
  console.log('Method: ', req.method);
  console.log('URL: ', req.url);
  res.send("<h2>Home page</h2>");
});

app.get("/contacts", (req, res) => {
  console.log('Method: ', req.method);
  console.log('URL: ', req.url);
  res.send("<h2>Contacts page</h2>")
})

app.listen(3000, () => console.log("The server is running"));
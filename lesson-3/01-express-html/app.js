const express = require('express');
const PORT = 3000;

const app = express(); // web-server

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/contacts', function (req, res) {
  console.log(req.url)
  console.log(req.method);
  console.log(req.headers);
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);

  res.send('<h2>Contacts page</h2>');
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
const http = require("http");

const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === "/") {
    res.write("<h2>Home page</h2>");
  } else if (url === "/contacts") {
    res.write("<h2>Contacts page</h2>");
  } else {
    res.write("<h2>404 Not found</h2>");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("The server is running");
});

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log('new user')

  socket.on('chat message', (message) => {
    console.log(message)

    io.emit('chat message', message)
  });
});

httpServer.listen(3000);
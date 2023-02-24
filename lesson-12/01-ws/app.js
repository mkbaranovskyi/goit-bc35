const WebSocket = require('ws')

const ws = new WebSocket.Server({ port: 3000 })

const clients = []

ws.on('connection', (newClient) => {
  clients.push(newClient)
  console.log('New client connected')

  // setTimeout(() => {
  //   newClient.send('Welcome to the ws server')
  // }, 2000)

  // clients.forEach((client) => {
  //   if (client !== newClient) {
  //     client.send('New client has joined')
  //   }
  // })

  newClient.on('message', (message) => {
    const decodedMessage = message.toString('utf-8');
    console.log(decodedMessage)

    setTimeout(() => {
      newClient.send(decodedMessage)
    }, 3000)
  })
})

ws.on('error', console.error);

ws.on('open', function open() {
  console.log('open')
  // ws.send('something');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});

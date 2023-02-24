const WebSocket = new require('ws')

const ws = new WebSocket.Server({ port: 3000 })

const clients = []

ws.on('connection', (newClient) => {
  clients.push(newClient)
  console.log('New client connected')

  newClient.on('message', (message) => {
    const encodedMessage = JSON.stringify(JSON.parse(message));

    clients.forEach((client) => {
      if (client !== newClient) {
        client.send(encodedMessage);
      }
    })
  })
})

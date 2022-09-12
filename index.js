const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();

const server = createServer(app);

const io = new Server(server, {
  /* options */
});

io.on('connection', (socket) => {
  console.log('Cliente conectado');
});

server.listen(3000, () => {
  console.log('Server corriendo en puerto 3000');
});

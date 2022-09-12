const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Http Server
    this.server = http.createServer(this.app);

    //Configuracion de Sockets
    this.io = socketio(this.server, {
      /* Config */
    });
  }

  configurarSockets() {
    new Sockets(this.io);
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, '../public')));
  }

  execute() {
    this.configurarSockets();
    this.middlewares();
    this.server.listen(this.port, () => {
      console.log('Server corriendo en puerto:', this.port);
    });
  }
}

module.exports = Server;

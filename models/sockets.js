class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvent();
  }

  socketEvent() {
    //?On connection
    this.io.on('connection', (socket) => {
      //? Escuchar evento
      socket.on('mensaje-to-server', (data) => {
        console.log(data);
        this.io.emit('mensaje-from-server', data);
      });
    });
  }
}

module.exports = Sockets;

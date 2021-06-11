const socket = io.connect('/');
socket.on('connect', function () {
  socket.emit('join', { username: 'testUsername' });
});

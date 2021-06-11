const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const { v4: uuid } = require('uuid');
const port = 80;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (_, res) => {
  res.render('index');
});

app.get('/room/:roomId', (req, res) => {
  console.log(req.params.roomId);
  res.render('room');
});

app.post('/join', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect(`/room/${uuid()}`);
});

io.on('connection', (socket) => {
  socket.on('join', ({ roomId, username }) => {
    socket.broadcast.emit('user-connected', username);
    // console.log('room id', roomId);
    // console.log('username', username);
    //     socket.to(roomId).broadcast.emit('user-connected', username);
    //     console.log('user join ');
    //
    //     socket.on('disconnect', () => {
    //       socket.to(roomId).broadcast.emit('user-disconnected', username);
    //     });
  });
});

server.listen(port, () => console.log('Server is running!'));

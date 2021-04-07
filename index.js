const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (_, res) => {
  res.render('index');
});

app.get('/chatroom', (_, res) => {
  res.render('chatroom');
});

app.post('/join-room', (req, res) => {
  res.redirect('/chatroom');
});

app.listen(port, () => console.log(`Listening on port ${port}`));

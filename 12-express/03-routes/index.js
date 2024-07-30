const express = require('express');

const app = express();

const getRootHandler = (req, res) => {
  res.send('get root route');
}
const getCommentsHandler = (req, res) => {
  res.send('get comments route')
}

const postCommentsHandler = (req, res) => {
  res.send('post comments route')
}

app.get('/', getRootHandler);
app.get('/comments', getCommentsHandler)
app.post('/comments', postCommentsHandler)

app.listen(5500, () => console.log('listening on port 5500'));

const express = require('express');

const app = express();

const firstHandler = (req, res, next) => {
  console.log('First handler');
  next();
}
const secondHandler = (req, res) => {
  res.send('Response from express');
  console.log('Second handler');
}

app.get('/', firstHandler, secondHandler);

app.listen(5500, () => console.log('listening on port 5500'));

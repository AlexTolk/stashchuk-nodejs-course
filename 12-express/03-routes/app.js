const express = require('express');
const router = require('./routes/index')
const app = express();

app.use(router)

app.listen(5500, () => console.log('listening on port 5500'));

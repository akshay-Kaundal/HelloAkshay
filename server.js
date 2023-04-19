'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '1.2.3.4';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
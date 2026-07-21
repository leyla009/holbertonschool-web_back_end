#!/usr/bin/node
/**
 * Creates a small HTTP server using the Express module.
 */
const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port);

module.exports = app;

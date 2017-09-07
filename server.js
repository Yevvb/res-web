const express = require('express');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/src'));

app.listen(port,() => {
  console.log(`Listen on ${port}`)
});
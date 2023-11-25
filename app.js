var express = require('express');
var app = express();
var http = require('http');


const port = 8080;

var server = http.createServer(app).listen(port, function () {
  console.log(`listening on http://localhost:${port}`);
});

app.use('/', express.static("./public"));

app.get('/', function(req, res) {
  res.sendFile(__dirname+"/public/index.html");
});

app.get('/main', function(req, res) {
  res.sendFile(__dirname+"/public/index.html");
});


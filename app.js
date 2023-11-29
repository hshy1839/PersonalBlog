var express = require('express');
var app = express();
var http = require('http');

const port = 7777;

app.get('/', function(req, res) { res.sendFile(__dirname+"/views/login.html");});
app.use('/', express.static(__dirname + "/public"));
app.use('/', express.static(__dirname + "/views"));
app.get('/login', function(req, res) { res.sendFile(__dirname+"/views/login.html");});
app.get('/main', function(req, res) { res.sendFile(__dirname+"/views/index.html");});
app.get('/login/signup', function(req, res) { res.sendFile(__dirname+"/views/signup.html");});

var server = http.createServer(app).listen(port, function () {
  console.log(`listening on http://localhost:${port}`);
});


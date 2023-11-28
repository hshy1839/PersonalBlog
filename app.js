var express = require('express');
var app = express();
var http = require('http');


const port = 7777;

var server = http.createServer(app).listen(port, function () {
  console.log(`listening on http://localhost:${port}`);
});

app.use('/', express.static(__dirname + "/public"));
app.use('/', express.static(__dirname + "/views"));

app.get('/', function(req, res) { res.sendFile(__dirname+"/views/login.html");});
app.get('/login', function(req, res) { res.sendFile(__dirname+"/views/login.html");});
app.get('/main', function(req, res) { res.sendFile(__dirname+"/views/index.html");});
app.get('/login/register', function(req, res) { res.sendFile(__dirname+"/views/register.html");});
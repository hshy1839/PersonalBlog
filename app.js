var express = require('express');
var app = express();
var http = require('http');
const sql = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const port = 7777;

const db = new sql.Database('users.db');

db.serialize(() => {
  db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY, 
    username TEXT,
    password TEXT,
    name TEXT,
    email TEXT
  )`);
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) { res.sendFile(__dirname+"/views/login.html");});
app.use('/', express.static(__dirname + "/public"));
app.use('/', express.static(__dirname + "/views"));
app.get('/login', function(req, res) { res.sendFile(__dirname+"/views/login.html");});
app.get('/main', function(req, res) { res.sendFile(__dirname+"/views/index.html");});
app.get('/login/signup', function(req, res) { res.sendFile(__dirname+"/views/signup.html");});

var server = http.createServer(app).listen(port, function () {
  console.log(`listening on http://localhost:${port}`);
});

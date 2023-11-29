const express = require('express');
const http = require('http');
const loginRouter = require('./router/LoginAPI');
const cookieParser = require("cookie-parser");

const app = express();
const port = 7777;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/static', express.static('public'));
app.use(cookieParser());
app.get('/', (req, res) => {
    res.status(200).json({
        massage: "인덱스 화면과 연결 잘 됨."
    });
});
app.use('/login', loginRouter);
app.get('/', function (req, res) { res.sendFile(__dirname + "/views/login.html"); });
app.use('/', express.static(__dirname + "/public"));
app.use('/', express.static(__dirname + "/views"));
app.get('/login', function (req, res) { res.sendFile(__dirname + "/views/login.html"); });
app.get('/main', function (req, res) { res.sendFile(__dirname + "/views/index.html"); });
app.get('/login/signup', function (req, res) { res.sendFile(__dirname + "/views/signup.html"); });

var server = http.createServer(app).listen(port, function () {
  console.log(`listening on http://localhost:${port}`);
});

const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { squelize } = require('./models');

const app = express();

const port = 7777;
app.set('port', process.env.PORT || 3001);
app.set('view engine', 'html');
nunjucks.configure('views', {
  express : app,
  watch : true,
});
squelize.sync({ force:false}).then(() => { console.log('DB 연결성공');}).catch((err) => { console.log(err);});
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use((req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
})
app.get('/', function(req, res) { res.sendFile(__dirname+"/views/login.html");});
app.use('/', express.static(__dirname + "/public"));
app.use('/', express.static(__dirname + "/views"));
app.get('/login', function(req, res) { res.sendFile(__dirname+"/views/login.html");});
app.get('/main', function(req, res) { res.sendFile(__dirname+"/views/index.html");});
app.get('/login/signup', function(req, res) { res.sendFile(__dirname+"/views/signup.html");});

var server = http.createServer(app).listen(port, function () {
  console.log(`listening on http://localhost:${port}`);
});

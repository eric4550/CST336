//app.js
//load things
var express = require('express');
var app = express();

app.use(express.static("public"));

//set the view engine to ejs
app.set('view engine', 'ejs');

//use res.render to load up an ejs file

//index page
app.get('/', function(req, res){
  res.render('pages/home');
});

//about page
app.get('/page1', function(req, res) {
  res.render('pages/page1');
});

app.get('/page2', function(req, res) {
  res.render('pages/page2');
});

app.get('/page3', function(req, res) {
  res.render('pages/page3');
});

app.listen(8080);
console.log('8080 is the magic port');
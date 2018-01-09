var express = require('express');
var app = express();
var chalk = require('chalk');
var volleyball = require('volleyball')
var bodyParser = require('body-parser')
var routes = require('./routes')
// var routes = require('./routes'); uncomment this when you are ready to connect your router


app.use(bodyParser.urlencoded({extended: false}))
app.use(volleyball)
app.use(bodyParser)
app.use('/', routes)

app.get('/', function (req, res, next) {
  res.send('Root Route');
});


var PORT = 8000;

app.listen(PORT, function () {
  console.log(chalk.blue('server listening on port: ') + chalk.magenta(PORT));
});

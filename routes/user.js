var express = require('express');
var app = express();
var userStorage = require('../userStorage.js')
let users=[]

app.get('/', function(req, res){
  console.log('hellooooo in user get')
  res.send(userStorage.getAllUsers())
  next()
})


app.get('/:name', function(req, res){
  console.log('hellooooo in user get')
  res.send(userStorage.getUserByName(name))
  next()
})

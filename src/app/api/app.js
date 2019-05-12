var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
  
  })
var db = require('./model/db');
app.post('/findcompany', function (req, res) {
    req.end("hello")
    })


  
module.exports = app;
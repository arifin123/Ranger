const express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var routes = require('./routes')
var util = require('./util')
var cors = require("cors");
var timeout = require('connect-timeout')
var cookieParser = require('cookie-parser')
var config = require('./config')

var app = express()
var constanta = util.constant
var logger = util.logger
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(timeout('15s'))
app.use(cookieParser())
app.use(cors())

app.get('/'+constanta.versionURL, function (req, res) {
  res.send('Ranger V1.0')
});

app.use('/'+constanta.versionURL+'/email', routes.emailService);

app.use(function (req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  logger.info('Client IP:', ip);
  // next();
  req.getUrl = function() {
    return req.protocol + "://" + req.get('host') + req.originalUrl;
  }
  logger.info('path = '+req.protocol + "://" + req.get('host') + req.originalUrl)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  return next();
});

module.exports = app
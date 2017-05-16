/*
  On "/" : API without authentication
  On "/app" : API with authentication
*/
const restify = require('express-restify-mongoose')
const mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var session = require('express-session')
var router_gaspaper_app = require("./routes_app.js")
var session_middleware = require("./middlewares/session.js")
var service = require('./service.js')
require('./db.js');

var jsonParser = bodyParser.json();
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true}));
app.use(bodyParser.json({limit: '10mb'}));
app.use(express.static(__dirname + "/app"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ExpressJs Sessions
app.set('trust proxy', 1) //trust first proxy
app.use(session({
  secret: "secret_token",
  resave: false,
  saveUninitialized: false
}))

// API express
app.use('/app', session_middleware)
app.use('/app', router_gaspaper_app)
app.post('/sessions', service.sessions)
app.get('/login', service.login)
app.get('/logout', service.logout)
// API express

// Restify API ----------------
const router = express.Router()
restify.serve(router, mongoose.model('register', register))
app.use(router)
// Restify API ----------------

app.listen(8000, function(req, res){
  console.log("Server started")
})
//Imports
const express = require('express');
const bodyParser = require('body-parser');

//App imports
const locations = require('./routes/locations')
const config = require('./config/database'); //database configuration
const mongoose = require('mongoose');

//Session imports
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const uuid = require('uuid/v4')
const passport = require('passport');




//Creates the instance
const app = express();

//Configure the secret and unique strings generator for session
app.use(session({
  genid: (req) => {
    return uuid() // use UUIDs for session IDs
  },store: new FileStore(), 
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

//Connection to DB
mongoose.connect(config.db,{ useNewUrlParser: true });
var db = mongoose.connection;
console.log(config.db)
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});


//App middleware start
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

//Redirect all '/' request  to authentication.
app.get('/', function(req, res){  
  res.redirect('/users/authenticateUser')
});

//Statics (Styles and JS)
app.use(express.static(__dirname + '/public/'));

//Public routes
app.use('/locations',locations);

// Handle errors
app.use(function(err, req, res, next) {
  if(err.status === 404)
  	res.status(404).json({message: "Not found"});
  else
    if(err[0] && err[0].msg){
    res.status(500).json({message: "There was an error : " + err[0].msg});
    }
});

//Server listening at port 3000
app.listen(3000, function(){
	console.log('Node server listening on port 3000');
});
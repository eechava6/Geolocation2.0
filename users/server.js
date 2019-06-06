//Imports
const express = require('express');
const bodyParser = require('body-parser');

//App imports
const users = require('./routes/users');

const config = require('./config/database'); //database configuration
const mongoose = require('mongoose');


//Communication and discovery
const PORT = require('./config/instance')
const client = require('./config/eureka-client')

//Creates the instance
const app = express();

//Authentication script
const passport = require('passport');
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

//Redirect all '/' request  to authentication.
app.get('/', function(req, res){  
  res.send('Users microservice')
});

//Public routes
app.use('/', users);


// Handle errors
app.use(function(err, req, res, next) {
  if(err.status === 404)
  	res.status(404).json({message: "Not found"});
  else
    if(err[0] && err[0].msg){
    res.status(500).json({message: "There was an error : " + err[0].msg});
    }
});

app.listen(PORT, function(){
	console.log('Node server listening on port '+PORT);
});
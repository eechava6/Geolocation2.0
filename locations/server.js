//Imports
const express = require('express');
const bodyParser = require('body-parser');

//App imports
const locations = require('./routes/locations')
const config = require('./config/database'); //database configuration
const mongoose = require('mongoose');

//Creates the instance
const app = express();


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


//Redirect all '/' request  to authentication.
app.get('/', function(req, res){  
  res.send("Locations microservice")
});

//Public routes
app.use('/',locations);

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
let port = 4000
app.listen(port, function(){
	console.log('Node server listening on port '+port);
});
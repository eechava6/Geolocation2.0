//Imports User Model
const userModel = require('../models/users');

//Imports for session and security 
//Bcrypt hashes passwords
const bcrypt = require('bcryptjs'); 
//Passport its authentication middleware.
const passport = require('passport');
//LocalStrategy is the method to log (it means it just uses local login and not other services login)
const LocalStrategy = require('passport-local').Strategy;

//Configure passport.js to use the local strategy
passport.use(new LocalStrategy({},
  (username, password, done) => {
    //Determines if info sent match with db data
    userModel.findOne({username:username}, function(err, userInfo){
       if(err){
         return done(null, false, { message: 'Invalid credentials.\n' });
       }
       if (!userInfo) {
         return done(null, false, { message: 'Invalid credentials.\n' });
       }
      if(!bcrypt.compareSync(password, userInfo.password)) {
         return done(null, false, { message: 'Invalid credentials.\n' });
       }else{
         return done(null, userInfo);
       }
    }).catch(error => done(error));
  }
));

//Tells passport how to serialize the user
passport.serializeUser((user, done) => {
   done(null, user.id);
 });

 //Tells passport how to deserialize the user
 passport.deserializeUser((id, done) => {
   userModel.findById(id, function(err, user) {
      done(err, user);
    });
 });

module.exports = {

//Creates a new user, user send a post request with username, password and email 
//and the method calls DB using User model
 create: function(req, res, next) {

      userModel.create({ username: req.body.username, email: req.body.email, password: req.body.password }, function (err, result) {
      if (err){ 
         console.log("Error creating user : "+err)
         return res.json({status:"failed"})
         }else
         
         return res.json({status:"success"})
      });
 },

//Calls passport authentication, user send
//username and password and passport determines if match with DB
authenticate: function(req, res, next) {
   passport.authenticate('local', (err, user, info) => {
    if(info) { return res.send(info.message)}
    if (err) { return next(err); }
   req.login(user, (err) => {
      if(err){ 
        console.log("Error login user : "+err)
        return next(err)}
      req.session.data = user;
      return res.json({status:"success"})
   })
   })(req, res, next);
  }
}

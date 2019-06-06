//Fs reads a file to later write it to user
const fs = require('fs');

//Axios to make HTTP asynchronous request
const axios = require('axios')
const client = require('../../../config/eureka-client')

function getURL(){
   instances = client.getInstancesByAppId('USERS');
   random = Math.floor((Math.random()*instances.length-1) + 1);
   return instances[random];
}

module.exports = {

//Creates a new user, user send a post request with username, password and email 
//and the method calls DB using User model
 create: async(req, res, next) => {
   try {
      host = getURL().statusPageUrl
     } catch (host) {
      return res.json({status:"host"})
     }
   host = host+"/registerUser"
   axios.post(host, {
      username: req.body.username, 
      email: req.body.email, 
      password: req.body.password 
    })
   
    return res.json({status:"success"})
 },

//Calls passport authentication, user send
//username and password and passport determines if match with DB
authenticate: async(req, res, next) =>{
   try {
      host = getURL().statusPageUrl
     } catch (host) {
      return res.json({status:"host"})
     }
   host = host+"/authenticateUser"
   axios.post(host, {
      username: req.body.username, 
      password: req.body.password 
    }).then(function (response) {
      if(response.data.status === "success"){
         user = {username:req.body.username, password: req.body.password}
         req.session.data = user
      }
      return res.json(response.data);
    })
 },

//Deletes the cookie created for the user
//and redirects him to login URI
 logout: async(req, res, next) =>{
   if(req.session.data) {
    req.session.destroy();
    }
    res.json({status:"success"})
  },

//If user logged previously : redirects to UserPage
//If user has not log in the system, loads registration page.
   loadRegister: async(req, res, next) =>{
      if(req.session.data) {
         res.redirect('./userPage')
       }else{
         fs.readFile('./app/views/register.html',async (err, data) =>{
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            res.write(data);
            res.end();
          })
       }
  },

//If user logged previously : redirects to UserPage
//If user has not log in the system, loads authentication page.
   loadAuthenticate: async(req, res, next) => {
      if(req.session.data) {
         res.redirect('./userPage')
       } else {
         fs.readFile('./app/views/login.html',async (err, data) =>{
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            res.write(data);
            res.end();
            })
       }
      },

//If user logged previously : loads UserPage
//If user has not log in the system, loads authentication page.
   loadUserPage: async(req, res, next) => {
      if(req.session.data) {
         fs.readFile('./app/views/userpage.html',async (err, data) =>{
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            res.write(data);
            res.end();
            })
       } else {
         res.redirect('/')
       }
      
      }
}

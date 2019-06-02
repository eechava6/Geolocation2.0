//Fs reads a file to later write it to user
const fs = require('fs');

module.exports = {

//Save a new location, user just send a post request and 
//system based on Location model determines username, location, date and hour.
 save: async(req, res, next) =>{
   if(!req.session.data) {
      res.redirect('/')
    } else {
      console.log("save")
    }
     
 },

 //Search all locations related to a user, user just send post request
 //and system determines username and calls DB finding his routes history
 search: async(req, res, next) =>{

   console.log("search")
 },

//Given a track name return all latitudes and longitudes saved with that track ID
 filter: async(req, res, next) =>{
   console.log("Filter")
},
 //Clear all locations related to a user, user just send post request
 //and system determines username and calls DB removing his history
 clear: async(req,res,next) =>{
   console.log("clear")
 }
}
//Fs reads a file to later write it to user
const fs = require('fs');

//Axios to make HTTP asynchronous request
const axios = require('axios')
const client = require('../../../config/eureka-client')

function getURL(){
   instances = client.getInstancesByAppId('LOCATIONS');
   random = Math.floor((Math.random()*instances.length-1) + 1);
   return instances[random];
}
module.exports = {

//Save a new location, user just send a post request and 
//system based on Location model determines username, location, date and hour.
 save: async(req, res, next) =>{
   if(!req.session.data) {
      res.redirect('/')
    } else {
      try {
        host = getURL().statusPageUrl
       } catch (host) {
        return res.json({status:"host"})
       }
      host = host+"/saveLocation"
      axios.post(host, {
         username: req.session.data.username, 
         trackId:req.body.trackId,
         latitude: req.body.latitude, 
         longitude: req.body.longitude, 
      }).then(response => {
        
        return res.json(response.data);
      })
    }
     
 },

 //Search all locations related to a user, user just send post request
 //and system determines username and calls DB finding his routes history
 search: async(req, res, next) =>{
   try {
    host = getURL().statusPageUrl
   } catch (host) {
    return res.json({status:"host"})
   }
    host = host+"/searchLocations"
    axios.post(host, {
    username: req.session.data.username, }).then(response =>  {
    return res.json(response.data);
  })
 },

//Given a track name return all latitudes and longitudes saved with that track ID
 filter: async(req, res, next) =>{
  host = getURL().statusPageUrl
  try {
    host = getURL().statusPageUrl
   } catch (host) {
    return res.json({status:"host"})
   }
  host = host+"/mapLocations"
  axios.post(host, {
      trackId:req.body.trackId,
  }).then(response =>  {
    return res.json(response.data);
  })
},
 //Clear all locations related to a user, user just send post request
 //and system determines username and calls DB removing his history
 clear: async(req,res,next) =>{
  try {
    host = getURL().statusPageUrl
   } catch (host) {
    return res.json({status:"host"})
   }
  host = host+"/clearLocations"
    axios.post(host, {
      username:req.session.data.username,
    }).then(response =>  {
      return res.json(response.data);
    })
 }
}
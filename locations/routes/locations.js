//Defines location routes to post and get request.
const express = require('express');
const router = express.Router();
const locationController = require('../app/api/controllers/locations');

router.post('/searchLocations',locationController.search);
router.post("/mapLocations",locationController.filter);
router.post('/saveLocation',locationController.save);
router.post('/clearLocations',locationController.clear);

module.exports = router;
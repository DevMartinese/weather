const express = require('express');
const router = express.Router();
const { getDataByLocation, getWeatherByLocation, getForecastByLocation } = require('../controllers/weatherController');

router
  .get('/location', getDataByLocation)
  .get('/current/:city?', getWeatherByLocation)
  .get('/forecast/:city?', getForecastByLocation)

module.exports = router;
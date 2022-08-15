const { getLocationByIp } = require('../services/getLocationByIp');
const { getWeatherByCity } = require('../services/getWeatherByCity');
const { getForecastByCity } = require('../services/getForecastByCity');
const { formatLocationData } = require('../helpers/formatLocationData');
const { formatWeatherData } = require('../helpers/formatWeatherData');
const { formatForecastData } = require('../helpers/formatForecastData');

exports.getDataByLocation = async (req, res) => {
  try {
    const getLocation = await getLocationByIp();
    const locationParsed = formatLocationData(getLocation);

    return res.status(200).json({ country_data: locationParsed });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getWeatherByLocation = async (req, res) => {
  try {
    if (req.params.city) {
      const getWeatherByCityParam = await getWeatherByCity(req.params.city);
      const wheaterParsed = formatWeatherData(getWeatherByCityParam);
      return res.status(200).json(wheaterParsed);
    }

    const getLocation = await getLocationByIp();
    const getWeatherByLocation = await getWeatherByCity(getLocation.city);

    const wheaterParsed = formatWeatherData(getWeatherByLocation);
    return res.status(200).json(wheaterParsed);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  };
};

exports.getForecastByLocation = async (req, res) => {
  try {
    if (req.params.city) {
      const getForecastByCityParam = await getForecastByCity(req.params.city);
      const forecastParsed = formatForecastData(getForecastByCityParam);
      return res.status(200).json(forecastParsed);
    }

    const getLocation = await getLocationByIp();
    const getForecast = await getForecastByCity(getLocation.city);
    const forecastParsed = formatForecastData(getForecast);

    return res.status(200).json(forecastParsed);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
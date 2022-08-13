const { getLocationByIp } = require('../services/getLocationByIp');
const { getWeatherByCity } = require('../services/getWeatherByCity');
const { getForecastByCity } = require('../services/getForecastByCity');

exports.getDataByLocation = async (req, res) => {
  try {
    const getLocation = await getLocationByIp();
    return res.status(200).json(getLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getWeatherByLocation = async (req, res) => {
  try {
    if (req.params.city) {
      const getWeatherByCityParam = await getWeatherByCity(req.params.city);
      return res.status(200).json(getWeatherByCityParam);
    }

    const getLocation = await getLocationByIp();
    const getWeatherByLocation = await getWeatherByCity(getLocation.city);

    return res.status(200).json(getWeatherByLocation);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  };
};

exports.getForecastByLocation = async (req, res) => {
  try {
    if(req.params.city) {
      const getForecastByCityParam = await getForecastByCity(req.params.city);
      return res.status(200).json(getForecastByCityParam);
    }
    
    const getLocation = await getLocationByIp();
    const getForecast = await getForecastByCity(getLocation.city);

    return res.status(200).json(getForecast);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
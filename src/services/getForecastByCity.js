const { clientAxios } = require('../config/clientAxios');

exports.getForecastByCity = async (city) => {
  const response = await clientAxios.get(`/forecast?q=${city}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`);
  return response.data;
};
exports.formatWeatherData = (weatherData) => {
  const { weather, main , name, wind, dt} = weatherData;

  const unixTimestamps = dt;
  const date = new Date(unixTimestamps * 1000);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  return {
    city: name,
    hour: `${hours}:${minutes}:${seconds}`,
    wheather: {
      main: weather[0].main,
      description: weather[0].description,
    },
    temps: {
      temp:`${main.temp} Cº`,
      temp_min: `${main.temp_min} Cº`,
      temp_max: `${main.temp_max} Cº`,
      humidity: `${main.humidity} %`,
    },
    wind_speed: `${wind.speed} km/h`,
  };
};
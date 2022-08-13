exports.formatForecastData = (forecastData) => {
  
  const forecast = forecastData.list.filter(item => (
    item.dt_txt.includes('18:00:00')
  ));

  return forecast.map(item => ({
    date: item.dt_txt,
    temp: `${item.main.temp} Cº`,
    temp_min: `${item.main.temp_min} Cº`,
    temp_max: `${item.main.temp_max} Cº`,
    humidity: `${item.main.humidity} %`,
    description: item.weather[0].description,
    main: item.weather[0].main
  }));
};
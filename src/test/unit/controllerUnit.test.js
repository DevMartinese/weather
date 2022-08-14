const { getDataByLocation, getWeatherByLocation, getForecastByLocation } = require('../../controllers/weatherController');
const { getLocationByIp } = require('../../services/getLocationByIp');
const { getWeatherByCity } = require('../../services/getWeatherByCity');
const { getForecastByCity } = require('../../services/getForecastByCity');

const mockLocation = require('../mocks/locationMock.json');
const mockWeather = require('../mocks/weatherMock.json');
const mockForecast = require('../mocks/forecastMock.json');
const mockResponseLocation = require('../mocks/locationResponseMock.json');
const mockResponseWeather = require('../mocks/weatherResponseMock.json');
const mockResponseForecast = require('../mocks/forecastResponseMock.json');

const httpMocks = require('node-mocks-http');
const { createRequest, createResponse } = httpMocks;

jest.mock('../../services/getLocationByIp');
jest.mock('../../services/getWeatherByCity');
jest.mock('../../services/getForecastByCity');

describe('getDataByLocation', () => {
  it('should return data by location', async () => {
    const req = createRequest();
    const res = createResponse();
    const location = mockLocation;
    getLocationByIp.mockResolvedValue(location);
    await getDataByLocation(req, res);
    expect(res._getJSONData()).toEqual(mockResponseLocation);
    expect(res.statusCode).toBe(200);
  }
  );

  it('should return error', async () => {
    const req = createRequest();
    const res = createResponse();
    const error = new Error('Error');
    getLocationByIp.mockRejectedValue(error);
    await getDataByLocation(req, res);
    expect(res.statusCode).toBe(500);
  });
});

describe('getWeatherByLocation', () => {
  it('should return weather by location', async () => {
    const req = createRequest({
      params: {
        city: 'London',
      }
    });
    const res = createResponse();
    const weather = mockWeather;
    getWeatherByCity.mockResolvedValue(weather);
    await getWeatherByLocation(req, res);
    expect(res._getJSONData()).toEqual(mockResponseWeather);
    expect(res.statusCode).toBe(200);
  });

  it('should return error', async () => {
    const req = createRequest({
      params: {
        city: 'London',
      }
    });
    const res = createResponse();
    const error = new Error('Error');
    getWeatherByCity.mockRejectedValue(error);
    await getWeatherByLocation(req, res);
    expect(res.statusCode).toBe(500);
  });
});

describe('getForecastByLocation', () => {
  it('should return forecast by location', async () => {
    const req = createRequest({
      params: {
        city: 'London',
      }
    });
    const res = createResponse();
    const forecast = mockForecast;
    getForecastByCity.mockResolvedValue(forecast);
    await getForecastByLocation(req, res);
    expect(res._getJSONData()).toEqual(mockResponseForecast);
    expect(res.statusCode).toBe(200);
  });

  it('should return error', async () => {
    const req = createRequest({
      params: {
        city: 'London',
      }
    });
    const res = createResponse();
    const error = new Error('Error');
    getForecastByCity.mockRejectedValue(error);
    await getForecastByLocation(req, res);
    expect(res.statusCode).toBe(500);
  });
});

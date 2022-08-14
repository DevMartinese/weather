const { getDataByLocation, getWeatherByLocation, getForecastByLocation } = require('../../controllers/weatherController');
const { getLocationByIp } = require('../../services/getLocationByIp');
const { getWeatherByCity } = require('../../services/getWeatherByCity');
const { getForecastByCity } = require('../../services/getForecastByCity');

const httpMocks = require('node-mocks-http');
const { createRequest, createResponse } = httpMocks;

const mockLocation = require('../mocks/locationMock.json');
const mockResponseLocation = require('../mocks/locationResponseMock.json');
const mockResponseWeather = require('../mocks/weatherResponseMock.json');

jest.mock('../../services/getLocationByIp');
jest.mock('../../services/getWeatherByCity');

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

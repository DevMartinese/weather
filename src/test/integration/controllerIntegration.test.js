const request = require('supertest');
const app = require('../../index');
const city = 'Buenos Aires';

describe('Get location by ipapi', () => {
  it('should return data by location with ipapi', async () => {
    await request(app).get('/v1/location')
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
  });
});

describe('Get weather location by ipapi and city param', () => {
  it('should return weather data by location by ipapi', async () => {
    await request(app).get('/v1/current')
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
  });

  it('should return weather data by location param', async () => {
    await request(app).get(`/v1/current/${city}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
  });

  it('should return error weather data by location', async () => {
    await request(app).get('/v1/current/dadasdasd')
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(500)
  });
});

describe('Get forecast data by city param and ipapi', () => {
  it('should return forecast data by location by ipapi', async () => {
    await request(app).get('/v1/forecast')
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
  });

  it('should return forecast data by location param', async () => {
    await request(app).get(`/v1/forecast/${city}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
  });

  it('should return error forecast data by location', async () => {
    await request(app).get('/v1/forecast/dadasdasd')
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(500)
  });
});
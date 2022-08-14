const request = require('supertest');
const app = require('../../index');
const city = 'London';

describe('Controller integration testing', () => {
  it('should return data by location', async () => {
    await request(app).get('/v1/location')
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
  });

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
});
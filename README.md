# personal-pay technical-test

Code Challenge para telecom

## Installation

Clonar este repo y luego ejecutar el siguiente comando en terminal

```bash
npm i
```

## Usage

Con el siguiente comando el carpeta raiz del proyecto, se ejecuta nodemon, para mantener corriendo la aplicación

```bash
npm run start
```

Para correr los test, tanto unitarios como de integración ejecutar el siguiente siguiente comando en terminal

```bash
npm run test
```

```bash
------------------------|---------|----------|---------|---------|-------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------|---------|----------|---------|---------|-------------------
All files               |     100 |      100 |     100 |     100 |                   
 src                    |     100 |      100 |     100 |     100 |                   
  index.js              |     100 |      100 |     100 |     100 |                   
 src/config             |     100 |      100 |     100 |     100 |                   
 src/controllers        |     100 |      100 |     100 |     100 | 
  weatherController.js  |     100 |      100 |     100 |     100 | 
 src/helpers            |     100 |      100 |     100 |     100 | 
  formatForecastData.js |     100 |      100 |     100 |     100 | 
  formatLocationData.js |     100 |      100 |     100 |     100 | 
  formatWeatherData.js  |     100 |      100 |     100 |     100 | 
 src/routes             |     100 |      100 |     100 |     100 | 
  routes.js             |     100 |      100 |     100 |     100 | 
 src/services           |     100 |      100 |     100 |     100 | 
  getForecastByCity.js  |     100 |      100 |     100 |     100 | 
  getLocationByIp.js    |     100 |      100 |     100 |     100 | 
  getWeatherByCity.js   |     100 |      100 |     100 |     100 | 
------------------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       13 passed, 13 total
Snapshots:   0 total
Time:        8.237 s
Ran all test suites.
```

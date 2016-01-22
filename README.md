# Mozaïk weather widgets

[![Travis CI](https://img.shields.io/travis/plouc/mozaik-ext-weather.svg?style=flat-square)](https://travis-ci.org/plouc/mozaik-ext-weather)
[![NPM version](https://img.shields.io/npm/v/mozaik-ext-weather.svg?style=flat-square)](https://www.npmjs.com/package/mozaik-ext-weather)

## Weather Client Configuration

In order to use the Mozaïk weather widgets, you **must** configure its **client**.

### parameters

key     | env key           | required | description
--------|-------------------|----------|-----------------------------------
`token` | WEATHER_API_TOKEN | yes      | *openweathermap api token*

#### using `config.js`

```javascript
{
  //…
  api: {
    weather: {
      token: 'secret_api_token'
    }
  }
}
```

#### using environment variable

Simply set **WEATHER_API_TOKEN** env variable, using `.env` or manually.

## Weather — Weather

> Show weather for given city/country

![clock](https://raw.githubusercontent.com/plouc/mozaik-ext-weather/master/preview/weather.weather.png)

### parameters

key       | required | description
----------|----------|----------------------------------------------------
`city`    | yes      | *The city you want to display weather for.*
`country` | yes      | *The country you want to display weather for.*
`lang`    | no       | *Lang used to display weather info. Defaults to `en`.*
`limit`   | no       | *Limit displayed days. Defaults to `3`.*

### usage

```javascript
{
    type:    'weather.weather',
    city:    'Paris',
    country: 'FR',
    lang:    'fr',
    limit:   2,
    columns: 1, rows: 1,
    x: 0, y: 0
},
{
    type:    'weather.weather',
    city:    'Tokyo',
    country: 'JP',
    lang:    'en',
    limit:   3,
    columns: 1, rows: 1,
    x: 1, y: 0
},
{
    type:    'weather.weather',
    city:    'Barcelona',
    country: 'ES',
    lang:    'es',
    limit:   4,
    columns: 1, rows: 1,
    x: 2, y: 0
}
```

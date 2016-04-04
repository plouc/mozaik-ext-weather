# Mozaïk weather widgets

[![License][license-image]][license-url]
[![Travis CI][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Dependencies][gemnasium-image]][gemnasium-url]
[![Coverage Status][coverage-image]][coverage-url]
![widget count][widget-count-image]

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

[license-image]: https://img.shields.io/github/license/plouc/mozaik-ext-weather.svg?style=flat-square
[license-url]: https://github.com/plouc/mozaik-ext-weather/blob/master/LICENSE.md
[travis-image]: https://img.shields.io/travis/plouc/mozaik-ext-weather.svg?style=flat-square
[travis-url]: https://travis-ci.org/plouc/mozaik-ext-weather
[npm-image]: https://img.shields.io/npm/v/mozaik-ext-weather.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/mozaik-ext-weather
[gemnasium-image]: https://img.shields.io/gemnasium/plouc/mozaik-ext-weather.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/plouc/mozaik-ext-weather
[coverage-image]: https://img.shields.io/coveralls/plouc/mozaik-ext-weather.svg?style=flat-square
[coverage-url]: https://coveralls.io/github/plouc/mozaik-ext-weather
[widget-count-image]: https://img.shields.io/badge/widgets-x1-green.svg?style=flat-square
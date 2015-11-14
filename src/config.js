var convict = require('convict');
var check   = require('validator').check;

var configurator = convict({
    weather: {
        token: {
            doc: 'The weather API token',
            default: null,
            format: String,
            env: 'WEATHER_SERVICE_KEYPATH'
        }
    }
});

module.exports = configurator;
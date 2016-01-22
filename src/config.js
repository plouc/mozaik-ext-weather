const convict = require('convict');
const check   = require('validator').check;


const configurator = convict({
    weather: {
        apiToken: {
            doc:     'The weather API token',
            default: null,
            format:  String,
            env:     'WEATHER_API_TOKEN'
        }
    }
});


module.exports = configurator;

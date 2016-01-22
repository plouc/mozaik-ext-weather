import convict from 'convict';


const config = convict({
    weather: {
        apiToken: {
            doc:     'The weather API token',
            default: null,
            format:  String,
            env:     'WEATHER_API_TOKEN'
        }
    }
});


export default config;

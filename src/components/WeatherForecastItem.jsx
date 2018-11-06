import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { icon as iconHelper }          from './WeatherCodeHelper';


class WeatherForecastItem extends Component {
    render() {
        const { weather, main } = this.props;

        const icon      = iconHelper(weather[0].id);
        const iconClass = `weather__icon weather__icon--${icon}`;

        return (
            <div className="weather__weather__forecast__item">
                <i className={iconClass} />
                <span className="weather__weather__forecast__item__description">
                    {weather[0].description}
                </span>

                <span className="weather__weather__forecast__item__min-max">
                    <span className="weather__weather__forecast__item__min">
                        min.<br />
                        {Math.round(main.temp_min - 273.15)}°C
                    </span>
                    <span className="weather__weather__forecast__item__max">
                        max.<br />
                        {Math.round(main.temp_max - 273.15)}°C
                    </span>
                </span>
            </div>
        );
    }
}

WeatherForecastItem.displayName = 'WeatherForecastItem';

WeatherForecastItem.propTypes = {
    main: PropTypes.shape({
        temp_max: PropTypes.number.isRequired,
        temp_min: PropTypes.number.isRequired
    }).isRequired,
    weather: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string.isRequired
        })
    ).isRequired
};


export default WeatherForecastItem;

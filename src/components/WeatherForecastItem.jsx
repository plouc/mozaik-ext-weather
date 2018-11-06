import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { icon as iconHelper }          from './WeatherCodeHelper';


class WeatherForecastItem extends Component {
    render() {
        const { weather, main, dt_txt } = this.props;

        const icon      = iconHelper(weather[0].id);
        const iconClass = `weather__icon weather__icon--${icon}`;
        const dateArray = dt_txt.split(' ');
        const time = dateArray[1].split(':');

        return (
            <div className="weather__weather__forecast__item">
                <h4>{time[0]}:{time[1]}</h4>
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
    dt_txt: PropTypes.string.isRequired,
    weather: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string.isRequired
        })
    ).isRequired
};


export default WeatherForecastItem;

import test                from 'ava';
import React               from 'react'; // eslint-disable-line no-unused-vars
import { shallow }         from 'enzyme';
import WeatherForecastItem from '../../src/components/WeatherForecastItem.jsx';


const  temp = {
    min: 275,
    max: 285
};

const weatherItem = {
    id:          800,
    description: 'test description'
};


test('should display weather description and icon', t => {
    const wrapper = shallow(<WeatherForecastItem weather={[weatherItem]} temp={temp} />);

    t.is(wrapper.find('.weather__weather__forecast__item__description').length, 1);
    t.is(wrapper.find('.weather__weather__forecast__item__description').text(), 'test description');
    t.is(wrapper.find('.weather__icon--clear-sky').length, 1);
});

test('should render min and max temp', t => {
    const wrapper = shallow(<WeatherForecastItem weather={[weatherItem]} temp={temp} />);

    t.is(wrapper.find('.weather__weather__forecast__item__min').length, 1);
    t.is(wrapper.find('.weather__weather__forecast__item__min').text(), 'min.2°C');
    t.is(wrapper.find('.weather__weather__forecast__item__max').length, 1);
    t.is(wrapper.find('.weather__weather__forecast__item__max').text(), 'max.12°C');
});

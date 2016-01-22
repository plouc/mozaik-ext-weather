/* global describe it */
import React               from 'react'; // eslint-disable-line no-unused-vars
import { shallow }         from 'enzyme';
import { expect }          from 'chai';
import WeatherForecastItem from '../../components/WeatherForecastItem.jsx';


describe('<WeatherForecastItem />', () => {
    const  temp = {
        min: 275,
        max: 285
    };

    const weatherItem = {
        id:          800,
        description: 'test description'
    };

    it('should display weather description and icon', () => {
        const wrapper = shallow(<WeatherForecastItem weather={[weatherItem]} temp={temp} />);

        expect(wrapper.find('.weather__weather__forecast__item__description')).to.have.length(1);
        expect(wrapper.find('.weather__weather__forecast__item__description').text()).to.equal('test description');
        expect(wrapper.find('.weather__icon--clear-sky')).to.have.length(1);
    });

    it('should render min and max temp', () => {
        const wrapper = shallow(<WeatherForecastItem weather={[weatherItem]} temp={temp} />);

        expect(wrapper.find('.weather__weather__forecast__item__min')).to.have.length(1);
        expect(wrapper.find('.weather__weather__forecast__item__min').text()).to.equal('min.2°C');
        expect(wrapper.find('.weather__weather__forecast__item__max')).to.have.length(1);
        expect(wrapper.find('.weather__weather__forecast__item__max').text()).to.equal('max.12°C');
    });
});

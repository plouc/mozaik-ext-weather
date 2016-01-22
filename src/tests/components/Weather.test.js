/* global describe it before after */
import React               from 'react'; // eslint-disable-line no-unused-vars
import { shallow }         from 'enzyme';
import { expect }          from 'chai';
import mockery             from 'mockery';

let Weather;

describe('<Weather />', () => {
    before(() => {
        mockery.enable({ useCleanCache: true });
        mockery.warnOnUnregistered(false);
        mockery.registerMock('mozaik/browser', {
            Mixin: { ApiConsumer: {} }
        });

        Weather = require('../../components/Weather.jsx');
    });

    after(() => {
        mockery.deregisterMock('mozaik/browser');
        mockery.disable();
    });

    it('should return correct api request', () => {
        const wrapper = shallow(<Weather city="Osaka" country="Japan" />);

        expect(wrapper.instance().getApiRequest()).to.deep.equal({
            id:     'weather.combined.Osaka.Japan.en.3',
            params: {
                city:    'Osaka',
                country: 'Japan',
                lang:    'en',
                limit:   3
            }
        });
    });

    it('should display configured city and country', () => {
        const wrapper = shallow(<Weather city="Osaka" country="Japan" />);

        expect(wrapper.find('.widget__header__subject')).to.have.length(1);
        expect(wrapper.find('.widget__header__subject').text()).to.equal('Osaka - Japan');
    });

    it('should display current weather when available', () => {
        const currentWeather = {
            main: {
                temp: 285
            },
            weather: [
                {
                    id:          800,
                    description: 'current description'
                }
            ]
        };
        const wrapper = shallow(<Weather city="Osaka" country="Japan" />);
        wrapper.setState({ current: currentWeather });

        expect(wrapper.find('.weather__weather__description')).to.have.length(1);
        expect(wrapper.find('.weather__weather__description').text()).to.equal('current description');
        expect(wrapper.find('.weather__icon--clear-sky')).to.have.length(1);
        expect(wrapper.find('.weather__weather__temp')).to.have.length(1);
        expect(wrapper.find('.weather__weather__temp').text()).to.equal('12°C');
    });
});

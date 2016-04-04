import test        from 'ava';
import React       from 'react';
import { shallow } from 'enzyme';
import mockery     from 'mockery';


let Weather;


test.before('before', t => {
    mockery.enable({
        warnOnUnregistered: false
    });
    mockery.registerMock('mozaik/browser', {
        Mixin: { ApiConsumer: {} }
    });

    Weather = require('./../../src/components/Weather.jsx').default;
});

test.after('after', () => {
    mockery.deregisterMock('mozaik/browser');
    mockery.disable();
});

test('should return correct api request', t => {
    const wrapper = shallow(<Weather city="Osaka" country="Japan" />);

    t.same(wrapper.instance().getApiRequest(), {
        id:     'weather.combined.Osaka.Japan.en.3',
        params: {
            city:    'Osaka',
            country: 'Japan',
            lang:    'en',
            limit:   3
        }
    });
});

test('should display configured city and country', t => {
    const wrapper = shallow(<Weather city="Osaka" country="Japan" />);

    t.is(wrapper.find('.widget__header__subject').length, 1);
    t.is(wrapper.find('.widget__header__subject').text(), 'Osaka - Japan');
});

test('should display current weather when available', t => {
    const currentWeather = {
        main: {
            temp: 285
        },
        weather: [
            {
                id: 800,
                description: 'current description'
            }
        ]
    };
    const wrapper = shallow(<Weather city="Osaka" country="Japan"/>);
    wrapper.setState({current: currentWeather});

    t.is(wrapper.find('.weather__weather__description').length, 1);
    t.is(wrapper.find('.weather__weather__description').text(), 'current description');
    t.is(wrapper.find('.weather__icon--clear-sky').length, 1);
    t.is(wrapper.find('.weather__weather__temp').length, 1);
    t.is(wrapper.find('.weather__weather__temp').text(), '12°C');
});

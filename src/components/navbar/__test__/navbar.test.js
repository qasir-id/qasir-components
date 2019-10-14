import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import Navbar from '..';

describe('Navbar component', () => {
    it('Should exist', () => {
        expect(Navbar).toMatchSnapshot();
    });
    it('Should be a  Navbar', () => {
        const component = renderer.create(<Navbar />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
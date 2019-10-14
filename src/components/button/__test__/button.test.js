import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import Button from '..';

describe('Button component', () => {
    it('Should exist', () => {
        expect(Button).toMatchSnapshot();
    });
    // it('Should be a default Button', () => {
    //     const component = renderer.create(<Button />);
    //     expect(component.toJSON()).toMatchSnapshot();
    // });
    // it('Should be an anchor button', () => {
    //     const component = renderer.create(<Button htmlType="a" href="https://github.com" />);
    //     expect(component.toJSON()).toMatchSnapshot();
    // });
});
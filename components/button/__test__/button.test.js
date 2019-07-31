import React, { Component } from 'react';
import { render, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from '..';

describe('Button', () => {
    it('renders correctly', () => {
        const wrapper = render(<Button>Follow</Button>);
        expect(wrapper).toMatchSnapshot();
    });
});
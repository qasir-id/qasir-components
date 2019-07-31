import React, { Component } from 'react';
import { render, shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from '../button';

let wrapper;
beforeEach(() => {
    wrapper = render(<Button>Follow</Button>);
});
describe('Button', () => {
    it('Renders button type correctly', () => {
        
    });
});
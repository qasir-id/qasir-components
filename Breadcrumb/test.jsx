import BreadCrumb from '../BreadCrumb';
import React from 'react';
import testComponentA11y from '../../lib/a11yTestHelper';

describe('BreadCrumb', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <BreadCrumb>A Button</BreadCrumb>,
    )
    .then(results => expect(results.violations.length).toBe(0)));
});

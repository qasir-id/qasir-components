import Badge from '../Badge';
import React from 'react';
// const BadgeExample = require('Badge');
// const testComponentA11y = require('a11yTestHelper');
import testComponentA11y from '../../lib/a11yTestHelper';

describe('Badge', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <Badge>A Button</Badge>,
    )
    .then(results => expect(results.violations.length).toBe(0)));
});

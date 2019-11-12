import React from 'react';
import { storiesOf } from '@storybook/react';

import StepForm from './StepForm';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Component
---
`;

storiesOf('product|StepForm', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => <StepForm />);

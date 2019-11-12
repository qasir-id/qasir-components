import React from 'react';
import { storiesOf } from '@storybook/react';

import FormItemUploadMultiple from './FormItemUploadMultiple';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Component
---
`;

storiesOf('product|FormItemUploadMultiple', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => <FormItemUploadMultiple />);

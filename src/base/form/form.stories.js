import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './form';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Form
---
This is example usage of form, see form.js file to see how it works. The form validation is using https://react-hook-form.com/, click the link to see better documentation

`;

storiesOf('form|Form', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('form', () => (
      <Form />
  ));

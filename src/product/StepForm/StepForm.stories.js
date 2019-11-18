import React from 'react';
import { storiesOf } from '@storybook/react';
import StepForm from './StepForm';

const steps = [
  {
    title: 'Data Usaha',
    content: 'First-content aaa'
  },
  {
    title: 'Second',
    content: 'Second-content'
  },
  {
    title: 'Last',
    content: 'Last-content'
  }
];

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Step form
---
This component extended from antd upload, follow this link https://ant.design/components/upload/ to see more details about props for component customization
~~~js
import StepForm from 'qasir/lib/product';
~~~

or

~~~js
import StepForm from 'qasir/lib/product/StepForm';
~~~

Examples
~~~js
<StepForm {...props} />
~~~
`;

storiesOf('product|StepForm', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <StepForm
      stepContent={steps}
      onClickNext={() => console.log('next')}
      onClickFinish={() => alert('FINISH')}
    />
  ));

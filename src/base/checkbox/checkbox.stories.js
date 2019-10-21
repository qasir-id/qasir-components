import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import Checkbox from './checkbox';

const LabelContent = (
  <>
    <h3 style={{ fontSize: 14, color: '#474955', margin: 0 }}>Mandiri</h3>
    <span style={{ fontSize: 12, color: '#474955', marginBottom: 0 }}>
      0140397
    </span>
  </>
);

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Checkbox
---
`;

storiesOf('form|Checkbox', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <>
      <Checkbox
        id="checkbox-label-1"
        indeterminate={boolean('Intermediate (indeterminate)', false)}
        labelText={LabelContent}
        disabled={boolean('Disabled (disabled)', false)}
        hideLabel={boolean('No label (hideLabel)', false)}
        onChange={action('onChange')}
      />
    </>
  ));

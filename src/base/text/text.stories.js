import React from 'react';
import { storiesOf } from '@storybook/react';

import { text, select, boolean } from '@storybook/addon-knobs';
import Text, { TEXT_COLOR, TEXT_VARIANT, TEXT_WEIGHT } from './text';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Text
---
~~~js
import Text from 'qasir/lib/base';
~~~

or
~~~js
import Text from 'qasir/lib/base/text';
~~~

Usage
~~~js
<Text>Children</Text>
~~~


| Variant     | Size | Weight |
| ----------- | ---- | ------ |
| hero        | 40px | bold   |
| h1          | 24px | bold   |
| h2          | 22px | bold   |
| h3          | 20px | bold   |
| h4          | 18px | bold   |
| h5          | 16px | bold   |
| ui-large    | 20px | normal |
| ui-baseline | 16px | normal |
| ui-small    | 14px | normal |
| ui-micro    | 12px | normal |
| ui-tiny     | 11px | normal |
`;

storiesOf('base|Text', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('all variants', () => (
    <div>
      {Object.values(TEXT_VARIANT).map(variant => (
        <div key={variant} style={{ marginBottom: 10 }}>
          <Text variant={variant}>{variant}</Text>
        </div>
      ))}
    </div>
  ))
  .add('all text color', () => (
    <>
      {Object.values(TEXT_COLOR).map(color => (
        <div
          key={color}
          style={{
            marginBottom: 10
          }}
        >
          <Text color={color}>{color}</Text>
        </div>
      ))}
    </>
  ))
  .add('with knob', () => (
    <Text
      variant={select('variant', TEXT_VARIANT, 'ui-baseline')}
      weight={select('weight', TEXT_WEIGHT)}
      color={select('color', TEXT_COLOR, 'primary')}
      isItalic={boolean('italic', false)}
    >
      {text('content', 'Almost before we knew it, we had left the ground.')}
    </Text>
  ));

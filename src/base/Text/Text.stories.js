/* eslint-disable react/display-name */
import React from "react";
import { storiesOf } from "@storybook/react";

import Text, { TEXT_COLOR, TEXT_VARIANT, TEXT_WEIGHT } from "./Text";

import { text, select, object } from "@storybook/addon-knobs";
import { border } from "polished";

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Text
---
~~~js
import Text from '@qasirc/Base/Text/Text';
~~~

Examples
~~~js
<Text>Children</Text>
~~~
`;

storiesOf("base|Text", module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add("all variants", () => {
    return (
      <div>
        {Object.values(TEXT_VARIANT).map(variant => (
          <div key={variant} style={{ marginBottom: 10 }}>
            <Text variant={variant}>{variant}</Text>
          </div>
        ))}
      </div>
    );
  })
  .add("all text color", () => {
    return (
      <div style={{ minHeight: '100vh', padding: 15, backgroundColor: '#ccc' }}>
        {Object.values(TEXT_COLOR).map(color => (
          <div
            key={color}
            style={{
              marginBottom: 10
            }}
          >
            <Text color={color} weight="bold">{color}</Text>
          </div>
        ))}
      </div>
    );
  })
  .add("with knob", () => {
    return (
      <Text
        variant={select("variant", TEXT_VARIANT, "ui-baseline")}
        weight={select("weight", TEXT_WEIGHT)}
        color={select("color", TEXT_COLOR, "black")}
      >
        {text("content", "Almost before we knew it, we had left the ground.")}
      </Text>
    );
  });

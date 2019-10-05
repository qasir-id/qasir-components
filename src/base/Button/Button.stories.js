/* eslint-disable react/display-name */
import React from "react";
import { storiesOf } from "@storybook/react";

import Button, { BUTTON_VARIANT, BUTTON_SIZE } from "./Button";

import { text, select, boolean } from "@storybook/addon-knobs";

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Text
---
~~~js
import Text from '@qasirc/Base/Button/Button';
~~~

Examples
~~~js
<Button>Children</Button>
~~~
`;

storiesOf("base|Button", module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add("all buttons", () => {
    return (
      <div>
        <h3>Variants</h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {Object.values(BUTTON_VARIANT).map(variant => (
            <div key={variant} style={{ marginRight: 10 }}>
              <Button variant={variant}>{variant}</Button>
            </div>
          ))}
        </div>
        <h3>Sizes</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end"
          }}
        >
          {Object.values(BUTTON_SIZE).map(size => (
            <div key={size} style={{ marginRight: 10 }}>
              <Button size={size}>{size}</Button>
            </div>
          ))}
        </div>
        <h3>Disabled</h3>
        <div>
          <Button isDisabled={true}>Disabled</Button>
        </div>
        <h3>Loading</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end"
          }}
        >
          <div style={{ marginRight: 10 }}>
            <Button isLoading={true}>Disabled</Button>
          </div>
          <div>
            <Button isLoading={true} variant="secondary">
              Disabled
            </Button>
          </div>
        </div>
      </div>
    );
  })
  .add("with knob", () => {
    return (
      <Button
        variant={select("variant", BUTTON_VARIANT, "primary")}
        size={select("size", BUTTON_SIZE, "medium")}
        isLoading={boolean("is loading", false)}
        isDisabled={boolean("disabled", false)}
        isBlock={boolean("block", false)}
      >
        {text("text", "Button")}
      </Button>
    );
  });

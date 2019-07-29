import React from 'react';
import { storiesOf, addParameters } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import marked from 'marked';

import Button from '../button';
import basicMD from './info/basic.md';

const componentButton = 'Components/Buttons';
storiesOf(componentButton, module)        
    .addParameters({
        info: {                        
            text: marked(basicMD)
        },
    })
    .add('Variations', () => <Button onClick={action('onClick')}>Hello</Button>);
// storiesOf(componentButton, module).add('Button tags', () => <p>on progress</p>);
// storiesOf(componentButton, module).add('Outline buttons', () => <p>on progress</p>);
// storiesOf(componentButton, module).add('Sizes', () => <p>on progress</p>);
// storiesOf(componentButton, module).add('Active state', () => <p>on progress</p>);
// storiesOf(componentButton, module).add('Disabled state', () => <p>on progress</p>);
// storiesOf(componentButton, module).add('Toggle state', () => <p>on progress</p>);
// storiesOf(componentButton, module).add('Checkbox and radio buttons', () => <p>on progress</p>);
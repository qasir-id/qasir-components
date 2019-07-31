import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';
import marked from 'marked';

import Button from '../button';
import basicMD from './info/basic.md';

const componentButton = 'Components/Buttons';
const stories = storiesOf(componentButton, module);

stories
    .addDecorator(withKnobs)
    .add(
        'Variations', 
        withState({ initialState: '' })(
            ({ store }) => <Button onClick={action('onClick')} disabled={boolean('Disabled', false)} {...store.state}>{text('Label', 'Hello Storybook')}</Button>
        )  
    );    

// storiesOf(componentButton, module)        
//     .addParameters({
//         info: {                        
//             text: marked(basicMD)
//         },
//     })
//     .add(
//         'Variations',
//         withState({ initialState: '' })(
//             ({ store }) => <Button onClick={action('onClick')} {...store.state}>Hello</Button>
//         ),
//     );    
// storiesOf(componentButton, module).add('Button tags', () => <p>on progress</p>);
// storiesOf(componentButton, module).add('Outline buttons', () => <p>on progress</p>);
// storiesOf(componentButton, module).add('Sizes', () => <p>on progress</p>);
// storiesOf(componentButton, module).add('Active state', () => <p>on progress</p>);
// storiesOf(componentButton, module).add('Disabled state', () => <p>on progress</p>);
// storiesOf(componentButton, module).add('Toggle state', () => <p>on progress</p>);
// storiesOf(componentButton, module).add('Checkbox and radio buttons', () => <p>on progress</p>);
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';
import { specs, describe, it } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';
import marked from 'marked';

import Button from '../button';
import basicMD from './info/basic.md';

const componentButton = 'Components/Buttons';
const stories = storiesOf(componentButton, module);

stories
    .add('Variations', () => {
        const story = <Button onClick={action('onClick')}>Hello</Button>;      
        
        withState({ initialState: '' })(
            ({ store }) => <Button onClick={action('onClick')} {...store.state}>Hello</Button>
        );

        specs(() => describe('Button', function () {
            it('Should have the Hello World label', function () {
            let output = mount(story);
            expect(output.text()).toContain('Hello');
            });
        }));        
        return story;
    });    

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
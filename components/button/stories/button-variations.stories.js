import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../button';
import mdBtnVariations from '../notes/variations.md';

const componentButton = 'Components/Buttons';
const stories = storiesOf(componentButton, module);

stories    
    .add(
        'Variations', () => {
            return (
                <div>             
                   
                    <Button onClick={action('onClick')}>Default</Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>

                    <Button type="primary" onClick={action('onClick')}>Primary</Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>

                    <Button type="secondary" onClick={action('onClick')}>Secondary</Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>

                    <Button type="link" onClick={action('onClick')}>Link</Button>

                </div>
            )
        },
        {
            notes: { 
                markdown: mdBtnVariations 
            }
        } 
    );    
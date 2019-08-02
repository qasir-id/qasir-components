import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from '../button';
import markdownVariations from '../notes/variations.md';

const componentButton = 'Components/Buttons';
const stories = storiesOf(componentButton, module);

stories
    .addDecorator(withKnobs)
    .add(
        'Variations', () => {
            return (
                <div>             
                   
                    <Button                     
                        onClick={action('onClick')}                    
                        disabled={boolean('Disabled', false)}                                         
                    >{text('Button default', 'Default')}</Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>

                    <Button                
                        btnType="primary"     
                        onClick={action('onClick')}                     
                        disabled={boolean('Disabled', false)}                                      
                    >{text('Button primary', 'Primary')}</Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>

                    <Button               
                        btnType="secondary"      
                        onClick={action('onClick')}                     
                        disabled={boolean('Disabled', false)}                                         
                    >{text('Button secondary', 'Secondary')}</Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>

                    <Button               
                        btnType="link"      
                        onClick={action('onClick')}                     
                        disabled={boolean('Disabled', false)}                                         
                    >{text('Button link', 'Link')}</Button>

                </div>
            )
        },
        {
            notes: { 
                markdown: markdownVariations 
            }
        } 
    );    
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from '../button';
import mdBtnSizes from '../notes/sizes.md';

const componentButton = 'Components/Buttons';
const stories = storiesOf(componentButton, module);

stories
    .addDecorator(withKnobs)
    .add(
        'Sizes', () => {
            return (
                <div>
                    <Button                                        
                        type="primary"
                        size="sm"
                        onClick={action('onClick')}                         
                        disabled={boolean('Disabled', false)}                                       
                    >{text('Button small', 'Small')}</Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>   

                    <Button                
                        type="primary"     
                        size="md"
                        onClick={action('onClick')}                         
                        disabled={boolean('Disabled', false)}                                       
                    >{text('Button medium', 'Medium')}</Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>   

                    <Button                
                        type="primary"    
                        size="lg" 
                        onClick={action('onClick')}                         
                        disabled={boolean('Disabled', false)}                                       
                    >{text('Button large', 'Large')}</Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>

                    <Button                
                        type="primary"    
                        size="xl" 
                        onClick={action('onClick')}                         
                        disabled={boolean('Disabled', false)}                                       
                    >{text('Button extra large', 'Extra large')}</Button>
                </div>
            )
        },
        {
            notes: { 
                markdown: mdBtnSizes 
            }
        }         
    );    
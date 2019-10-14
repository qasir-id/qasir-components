import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Button from '../button';
import mdBtnExamples from '../notes/examples.md';
import CONSTANTS from '../../../modifiers/constants';

const componentButton = CONSTANTS.CATEGORY.ELEMENTS[0]+'/'+CONSTANTS.CATEGORY.ELEMENTS[1].BUTTONS;
const stories = storiesOf(componentButton, module);

stories    
    .addDecorator(withKnobs)
    .add(
        'Basic Example', () => {
            return (
                <Button 
                    primary
                    onClick={action('onClick')}
                    onMouseOver={action('onMouseOver')}
                    onMouseLeave={action('onMouseLeave')}     
                    
                    disabled={boolean('Disabled', false)}
                >
                    Example
                </Button>      
            )
        },
        {
            notes: { 
                markdown: mdBtnExamples 
            }
        } 
    );    
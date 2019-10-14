import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Button from '../button';
import mdBtnVariations from '../notes/variations.md';
import CONSTANTS from '../../../modifiers/constants';

const componentButton = CONSTANTS.CATEGORY.ELEMENTS[0]+'/'+CONSTANTS.CATEGORY.ELEMENTS[1].BUTTONS;
const stories = storiesOf(componentButton, module);

stories    
    .add(
        'Variations', () => {
            return (
                <div>             
                   
                    <Button 
                        onClick={action('onClick')}
                    >
                        Default
                    </Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>

                    <Button 
                        primary 
                        onClick={action('onClick')}
                    >
                        Primary
                    </Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>

                    <Button 
                        secondary 
                        onClick={action('onClick')}
                    >
                        Secondary
                    </Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>

                    <Button 
                        link 
                        onClick={action('onClick')}
                    >
                        Link
                    </Button>

                </div>
            )
        },
        {
            notes: { 
                markdown: mdBtnVariations 
            }
        } 
    );    
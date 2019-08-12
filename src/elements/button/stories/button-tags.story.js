import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from '../button';
import mdBtnTags from '../notes/tags.md';
import CONSTANTS from '../../../modifiers/constants';

const componentButton = CONSTANTS.CATEGORY.ELEMENTS[0]+'/'+CONSTANTS.CATEGORY.ELEMENTS[1].BUTTONS;
const stories = storiesOf(componentButton, module);

stories
    .addDecorator(withKnobs)
    .add(
        'Tags', () => {
            return (
                <div>
                    <Button                                        
                        type="primary"        
                        htmlType="a"                
                        onClick={action('onClick')}                                                                                       
                    >Link</Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>   

                    <Button                                        
                        type="primary"                                
                        onClick={action('onClick')}                                                                                       
                    >Button</Button>

                    <div style={{ marginRight: 15, display: 'inline' }}></div>   

                    {/* <Button                                        
                        type="primary"        
                        htmlType="input"                
                        onClick={action('onClick')}                                                                                       
                    >Link</Button>                     */}
                </div>
            )
        },
        {
            notes: { 
                markdown: mdBtnTags 
            }
        }         
    );    

export default stories;
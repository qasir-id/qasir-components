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
            ({ store }) => <div>                
                <Button                     
                    onClick={action('onClick')}
                    onMouseEnter={action('onMouseEnter default')}
                    onMouseLeave={action('onMouseLeave default')} 
                    disabled={boolean('Disabled', false)} 
                    {...store.state}                     
                >{text('Button default', 'Default')}</Button>

                <div style={{ marginRight: 15, display: 'inline' }}></div>

                <Button                
                    btnType="primary"     
                    onClick={action('onClick')} 
                    onMouseEnter={action('onMouseEnter primary')}
                    onMouseLeave={action('onMouseLeave primary')}
                    disabled={boolean('Disabled', false)} 
                    {...store.state}                     
                >{text('Button primary', 'Primary')}</Button>

                <div style={{ marginRight: 15, display: 'inline' }}></div>

                <Button               
                    btnType="secondary"      
                    onClick={action('onClick')} 
                    onMouseEnter={action('onMouseEnter secondary')}
                    onMouseLeave={action('onMouseLeave secondary')}
                    disabled={boolean('Disabled', false)} 
                    {...store.state}                    
                >{text('Button secondary', 'Secondary')}</Button>

                <div style={{ marginRight: 15, display: 'inline' }}></div>

                <Button               
                    btnType="link"      
                    onClick={action('onClick')} 
                    onMouseEnter={action('onMouseEnter link')}
                    onMouseLeave={action('onMouseLeave link')}
                    disabled={boolean('Disabled', false)} 
                    {...store.state}                    
                >{text('Button link', 'Link')}</Button>

            </div>
        )  
    );    

stories
    .addDecorator(withKnobs)
    .add(
        'Button tags', 
        withState({ initialState: '' })(
            ({ store }) => <div>                
                <Button                     
                    onClick={action('onClick')} 
                    disabled={boolean('Disabled', false)} 
                    {...store.state} 
                    style={{marginRight: 10}}
                >{text('Button default', 'Default')}</Button>

                <Button                
                    btnType="primary"     
                    onClick={action('onClick')} 
                    disabled={boolean('Disabled', false)} 
                    {...store.state} 
                    style={{marginRight: 10}}
                >{text('Button primary', 'Primary')}</Button>

                <Button               
                    btnType="secondary"      
                    onClick={action('onClick')} 
                    disabled={boolean('Disabled', false)} 
                    {...store.state}
                >{text('Button secondary', 'Secondary')}</Button>

            </div>
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
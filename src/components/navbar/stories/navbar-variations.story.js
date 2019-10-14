import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Navbar from '../navbar';
import mdNavbarVariations from '../notes/variations.md';

import iconBack from './asset/images/icon-arrow-back.png';
import iconCart from './asset/images/icon-shopping-cart.png';
import iconShopping from './asset/images/icon-transaction.png';
const elementsNavbar = 'Elements/Navbar';
const stories = storiesOf(elementsNavbar, module);

stories    
    .add(
        'Variations', () => {
            return (
                <div style={{ position: 'absolute', left:-15}}>
                    <Navbar 
                        onClick={action('onClick')}
                        title={'Belanja Grosir'}
                        iconPositionRight={true} 
                        imgRight={iconShopping}
                        imgBackUrl={iconBack}
                        imgRightLast={iconCart}
                        badge={true}
                        badgeCount={3}
                        toLink={action('onClick')}>
                    </Navbar>
                </div>
            )
        },
        {
            notes: { 
                markdown: mdNavbarVariations 
            }
        } 
    );    
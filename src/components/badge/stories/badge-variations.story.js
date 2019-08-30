import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Badge from '../badge';
import mdBadgeVariations from '../notes/variations.md';
import CONSTANTS from '../../../modifiers/constants';
import { mediumDummyContainerStyle } from "../common/styles";

const componentBadge = CONSTANTS.CATEGORY.ELEMENTS[0]+'/'+CONSTANTS.CATEGORY.ELEMENTS[1].BADGE;
const stories = storiesOf(componentBadge, module);

stories.add('Variations', 
    () => {
        return (
            <div>
                <div style={mediumDummyContainerStyle}>
                    <Badge count={38} />
                </div>
                <div style={mediumDummyContainerStyle}>
                    <Badge dot={true} count={38} />
                </div>
            </div>
        )
    }, {
        notes: mdBadgeVariations
    }
);
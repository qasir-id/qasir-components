import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Badge from '../badge';
import mdBadgeShowWhenZero from '../notes/show-when-zero.md';
import CONSTANTS from '../../../modifiers/constants';
import { mediumDummyContainerStyle } from "../common/styles";

const componentBadge = CONSTANTS.CATEGORY.ELEMENTS[0]+'/'+CONSTANTS.CATEGORY.ELEMENTS[1].BADGE;
const stories = storiesOf(componentBadge, module);

stories.add('Show When Zero', 
    () => {
        return (
            <div>
                <div style={mediumDummyContainerStyle}>
                    <Badge showWhenZero={true} />
                </div>
                <div style={mediumDummyContainerStyle}>
                    <Badge showWhenZero={false} />
                </div>
            </div>
        )
    }, {
        notes: mdBadgeShowWhenZero
    }
);
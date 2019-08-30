import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Badge from '../badge';
import CONSTANTS from '../../../modifiers/constants';
import { largeDummyContainerStyle, mediumDummyContainerStyle, smallDummyContainerStyle } from "../common/styles";

const componentBadge = CONSTANTS.CATEGORY.ELEMENTS[0]+'/'+CONSTANTS.CATEGORY.ELEMENTS[1].BADGE;
const stories = storiesOf(componentBadge, module);

stories.add('Default', 
    () => {
        return (
            <div>
                <div style={largeDummyContainerStyle}>
                    <Badge count={100} />
                </div>
                <div style={mediumDummyContainerStyle}>
                    <Badge count={38} />
                </div>

                <div style={smallDummyContainerStyle}>
                    <Badge count={48} />
                </div>
            </div>
        );
    }
);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Badge from '../badge';
// import mdBtnVariations from '../notes/variations.md';
import CONSTANTS from '../../../modifiers/constants';

const componentBadge = CONSTANTS.CATEGORY.ELEMENTS[0]+'/'+CONSTANTS.CATEGORY.ELEMENTS[1].BADGE;
const stories = storiesOf(componentBadge, module);

const baseDummyContainerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    display: "inline-block",
    borderRadius: "4px",
    margin: "16px"
}

const largeDummyContainerStyle = Object.assign({}, baseDummyContainerStyle, {
    width: "120px",
    height: "120px",
}); 

const mediumDummyContainerStyle = Object.assign({}, baseDummyContainerStyle, {
    width: "64px",
    height: "64px",    
});

const smallDummyContainerStyle = Object.assign({}, baseDummyContainerStyle, {
    width: "32px",
    height: "32px",
});

stories.add('Default', () => {
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
});

stories.add('Variations', () => {
    return (
        <div>
            <div style={mediumDummyContainerStyle}>
                <Badge count={38} />
            </div>
            <div style={mediumDummyContainerStyle}>
                <Badge dot={true} />
            </div>
        </div>
    )
});

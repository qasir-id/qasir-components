import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from '../checkbox';
import mdTable from '../notes/checkbox.md';

const elementsCheckbox = 'Elements/Checkbox';
const stories = storiesOf(elementsCheckbox, module);

stories
    .add(
        'Default', () => {
            return (
               <Checkbox checked={true}>checkbox</Checkbox>
            );
        }
    );

export default stories;
    
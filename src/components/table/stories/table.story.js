import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const componentTables = 'Components/Tables';
const stories = storiesOf(componentTables, module);

stories
    .add(
        'Table', () => {
            return (
                <p>hello</p>
            );
        }
    );
    
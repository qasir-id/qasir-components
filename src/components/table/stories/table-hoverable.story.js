import React from 'react';
import { storiesOf } from '@storybook/react';

const componentTables = 'Components/Tables';
const stories = storiesOf(componentTables, module);

stories
    .add(
        'Hoverable', () => {
            return (
                <p>hello</p>
            );
        }
    );
    
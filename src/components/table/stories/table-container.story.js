import React from 'react';
import { storiesOf } from '@storybook/react';

const componentTables = 'Components/Tables';
const stories = storiesOf(componentTables, module);

stories
    .add(
        'Table Container', () => {
            return (
                <p>hello</p>
            );
        }
    );
    
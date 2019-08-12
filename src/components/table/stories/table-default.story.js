import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Table from '../table';
import mdTable from '../notes/table.md';

const componentTables = 'Components/Tables';
const stories = storiesOf(componentTables, module);

stories
    .add(
        'Default', () => {
            return (
                <Table>
                    <tr>
                        <td>hellooooo</td>
                    </tr>
                </Table>
            );
        }
    );

export default stories;
    
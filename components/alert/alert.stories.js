import React from 'react';
import { storiesOf } from '@storybook/react';

const componentAlert = 'Components/Alert';
storiesOf(componentAlert, module).add('General', () => <p>on progress</p>);
storiesOf(componentAlert, module).add('Link color', () => <p>on progress</p>);
storiesOf(componentAlert, module).add('Additional content', () => <p>on progress</p>);
storiesOf(componentAlert, module).add('Dismissing', () => <p>on progress</p>);
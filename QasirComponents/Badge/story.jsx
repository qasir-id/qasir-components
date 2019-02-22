import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Badge from '../Badge'

storiesOf('Badge', module).add('Default', () => <Badge valueCount='2'/>);

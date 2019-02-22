import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { checkA11y } from 'storybook-addon-a11y';
import BreadCrumb from '../Breadcrumb';

const items = [{title:'Dashboard', link:'www.google.com'}, {title:'Menu', link:'www.google.com'}];
storiesOf('BreadCrumb', module).add('Default', () => <BreadCrumb items={items} />);
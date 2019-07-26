import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Overview/Start', module).add('to Storybook', () => <p>on progress</p>);

const layoutContainer = 'Layout/Container';
storiesOf(layoutContainer, module).add('Fluid container', () => <p>on progress</p>);
storiesOf(layoutContainer, module).add('Fixed container', () => <p>on progress</p>);

const layoutLevel = 'Layout/Level';
storiesOf(layoutLevel, module).add('Horizontal level', () => <p>on progress</p>);
storiesOf(layoutLevel, module).add('Centered level', () => <p>on progress</p>);
storiesOf(layoutLevel, module).add('Mobile level', () => <p>on progress</p>);

const formGeneral = 'Form/General';
storiesOf(formGeneral, module).add('Form field', () => <p>on progress</p>);
storiesOf(formGeneral, module).add('Form control', () => <p>on progress</p>);
storiesOf(formGeneral, module).add('With icons', () => <p>on progress</p>);
storiesOf(formGeneral, module).add('Form addons', () => <p>on progress</p>);
storiesOf(formGeneral, module).add('Form group', () => <p>on progress</p>);
storiesOf(formGeneral, module).add('Horizontal form', () => <p>on progress</p>);
storiesOf(formGeneral, module).add('Vertical form', () => <p>on progress</p>);
storiesOf(formGeneral, module).add('Disabled form', () => <p>on progress</p>);

const componentAlert = 'Components/Alert';
storiesOf(componentAlert, module).add('General', () => <p>on progress</p>);
storiesOf(componentAlert, module).add('Link color', () => <p>on progress</p>);
storiesOf(componentAlert, module).add('Additional content', () => <p>on progress</p>);
storiesOf(componentAlert, module).add('Dismissing', () => <p>on progress</p>);

const componentBadge = 'Components/Badge';
storiesOf(componentBadge, module).add('Variations', () => <p>on progress</p>);
storiesOf(componentBadge, module).add('Pill badges', () => <p>on progress</p>);
storiesOf(componentBadge, module).add('Links', () => <p>on progress</p>);

storiesOf('Components/Breadcrumb', module).add('Examples', () => <p>on progress</p>);

const componentButton = 'Components/Buttons';
storiesOf(componentButton, module).add('Variations', () => <p>on progress</p>);
storiesOf(componentButton, module).add('Button tags', () => <p>on progress</p>);
storiesOf(componentButton, module).add('Outline buttons', () => <p>on progress</p>);
storiesOf(componentButton, module).add('Sizes', () => <p>on progress</p>);
storiesOf(componentButton, module).add('Active state', () => <p>on progress</p>);
storiesOf(componentButton, module).add('Disabled state', () => <p>on progress</p>);
storiesOf(componentButton, module).add('Toggle state', () => <p>on progress</p>);
storiesOf(componentButton, module).add('Checkbox and radio buttons', () => <p>on progress</p>);

const componentButtonGroup = 'Components/Button group';
storiesOf(componentButtonGroup, module).add('Basic example', () => <p>on progress</p>);
storiesOf(componentButtonGroup, module).add('Button toolbar', () => <p>on progress</p>);
storiesOf(componentButtonGroup, module).add('Sizing', () => <p>on progress</p>);
storiesOf(componentButtonGroup, module).add('Nesting', () => <p>on progress</p>);
storiesOf(componentButtonGroup, module).add('Vertical variation', () => <p>on progress</p>);

const componentCard = 'Components/Card';
storiesOf(componentCard, module).add('Example', () => <p>on progress</p>);
storiesOf(componentCard, module).add('Content Body', () => <p>on progress</p>);
storiesOf(componentCard, module).add('Titles, text, and links', () => <p>on progress</p>);
storiesOf(componentCard, module).add('Content image', () => <p>on progress</p>);
storiesOf(componentCard, module).add('List groups', () => <p>on progress</p>);
storiesOf(componentCard, module).add('Kitchen sink', () => <p>on progress</p>);

const componentCarousel = 'Components/Carousel';
storiesOf(componentCarousel, module).add('With controls', () => <p>on progress</p>);
storiesOf(componentCarousel, module).add('With indicators', () => <p>on progress</p>);
storiesOf(componentCarousel, module).add('With captions', () => <p>on progress</p>);
storiesOf(componentCarousel, module).add('Crossfade', () => <p>on progress</p>);

const componentCollapse = 'Components/Collapse';
storiesOf(componentCollapse, module).add('Example', () => <p>on progress</p>);
storiesOf(componentCollapse, module).add('Multiple targets', () => <p>on progress</p>);
storiesOf(componentCollapse, module).add('Accordion example', () => <p>on progress</p>);

const componentDropdown = 'Components/Dropdown';
storiesOf(componentDropdown, module).add('Single button', () => <p>on progress</p>);
storiesOf(componentDropdown, module).add('Variations', () => <p>on progress</p>);
storiesOf(componentDropdown, module).add('Split button', () => <p>on progress</p>);
storiesOf(componentDropdown, module).add('Sizing', () => <p>on progress</p>);
storiesOf(componentDropdown, module).add('Directions dropup', () => <p>on progress</p>);
storiesOf(componentDropdown, module).add('Directions dropright', () => <p>on progress</p>);
storiesOf(componentDropdown, module).add('Directions dropleft', () => <p>on progress</p>);
storiesOf(componentDropdown, module).add('Active state', () => <p>on progress</p>);
storiesOf(componentDropdown, module).add('Disabled state', () => <p>on progress</p>);
storiesOf(componentDropdown, module).add('Responsive alignment', () => <p>on progress</p>);
storiesOf(componentDropdown, module).add('Menu content header', () => <p>on progress</p>);
storiesOf(componentDropdown, module).add('Menu content dividers', () => <p>on progress</p>);
storiesOf(componentDropdown, module).add('Menu content text', () => <p>on progress</p>);
storiesOf(componentDropdown, module).add('Menu content forms', () => <p>on progress</p>);

const uikitDetail = 'UI KIT/Detail';
storiesOf(uikitDetail, module).add('General', () => <p>on progress</p>);
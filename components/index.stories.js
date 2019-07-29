import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

const overview = 'Overview';
storiesOf(overview+'/Start', module).add('Install', () => <p>on progress</p>);

const overviewColor = 'Overview/Color';
storiesOf(overviewColor, module).add('Base', () => <p>on progress</p>);

const overviewResponsive = 'Overview/Responsive';
storiesOf(overviewResponsive, module).add('Grid options', () => <p>on progress</p>);
storiesOf(overviewResponsive, module).add('Breakpoints', () => <p>on progress</p>);
storiesOf(overviewResponsive, module).add('Disabling breakpoints', () => <p>on progress</p>);

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
storiesOf(formGeneral, module).add('Disabled form', () => <p>on progress</p>);

const formRange = 'Form/Range';
storiesOf(formRange, module).add('Variations', () => <p>on progress</p>);

const formCheckboxRadio = 'Form/Checkbox & Radio';
storiesOf(formCheckboxRadio, module).add('Default', () => <p>on progress</p>);
storiesOf(formCheckboxRadio, module).add('Inline', () => <p>on progress</p>);
storiesOf(formCheckboxRadio, module).add('Without labels', () => <p>on progress</p>);

const formLayout = 'Form/Layout';
storiesOf(formLayout, module).add('Form group', () => <p>on progress</p>);
storiesOf(formLayout, module).add('Form grid', () => <p>on progress</p>);
storiesOf(formLayout, module).add('Form row', () => <p>on progress</p>);
storiesOf(formGeneral, module).add('Horizontal form', () => <p>on progress</p>);
storiesOf(formGeneral, module).add('Vertical form', () => <p>on progress</p>);

const formHelpText = 'Form/Help text';
storiesOf(formHelpText, module).add('Block', () => <p>on progress</p>);
storiesOf(formHelpText, module).add('Inline', () => <p>on progress</p>);

const formValidation = 'Form/Validation';
storiesOf(formValidation, module).add('Variations', () => <p>on progress</p>);
storiesOf(formValidation, module).add('Input text', () => <p>on progress</p>);
storiesOf(formValidation, module).add('Input number', () => <p>on progress</p>);
storiesOf(formValidation, module).add('Input file', () => <p>on progress</p>);
storiesOf(formValidation, module).add('Checkbox & Radio', () => <p>on progress</p>);
storiesOf(formValidation, module).add('Textarea', () => <p>on progress</p>);

const formInputGroup = 'Form/Input group';
storiesOf(formInputGroup, module).add('Basic example', () => <p>on progress</p>);
storiesOf(formInputGroup, module).add('Wrapping', () => <p>on progress</p>);
storiesOf(formInputGroup, module).add('Sizing', () => <p>on progress</p>);
storiesOf(formInputGroup, module).add('Checkboxes and radios', () => <p>on progress</p>);
storiesOf(formInputGroup, module).add('Multiple inputs', () => <p>on progress</p>);
storiesOf(formInputGroup, module).add('Multiple addons', () => <p>on progress</p>);
storiesOf(formInputGroup, module).add('Button addons', () => <p>on progress</p>);
storiesOf(formInputGroup, module).add('Button with dropdowns', () => <p>on progress</p>);
storiesOf(formInputGroup, module).add('Segmented buttons', () => <p>on progress</p>);
storiesOf(formInputGroup, module).add('Custom select', () => <p>on progress</p>);
storiesOf(formInputGroup, module).add('Custom file input', () => <p>on progress</p>);

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

const componentListGroup = 'Components/List group';
storiesOf(componentListGroup, module).add('Basic example', () => <p>on progress</p>);
storiesOf(componentListGroup, module).add('Contextual classes', () => <p>on progress</p>);
storiesOf(componentListGroup, module).add('Active items', () => <p>on progress</p>);
storiesOf(componentListGroup, module).add('Disabled items', () => <p>on progress</p>);
storiesOf(componentListGroup, module).add('Links and buttons', () => <p>on progress</p>);
storiesOf(componentListGroup, module).add('Flush', () => <p>on progress</p>);
storiesOf(componentListGroup, module).add('Horizontal', () => <p>on progress</p>);
storiesOf(componentListGroup, module).add('With badges', () => <p>on progress</p>);
storiesOf(componentListGroup, module).add('Custom content', () => <p>on progress</p>);
storiesOf(componentListGroup, module).add('JavaScript behavior', () => <p>on progress</p>);

const componentMediaObject = 'Components/Media object';
storiesOf(componentMediaObject, module).add('Basic example', () => <p>on progress</p>);
storiesOf(componentMediaObject, module).add('Nesting', () => <p>on progress</p>);
storiesOf(componentMediaObject, module).add('Top-aligned media', () => <p>on progress</p>);
storiesOf(componentMediaObject, module).add('Center-aligned media', () => <p>on progress</p>);
storiesOf(componentMediaObject, module).add('Bottom-aligned media', () => <p>on progress</p>);
storiesOf(componentMediaObject, module).add('Order', () => <p>on progress</p>);
storiesOf(componentMediaObject, module).add('Media list', () => <p>on progress</p>);

const componentModal = 'Components/Modal';
storiesOf(componentModal, module).add('Basic example', () => <p>on progress</p>);
storiesOf(componentModal, module).add('Sizing', () => <p>on progress</p>);

const componentNavs = 'Components/Navs';
storiesOf(componentNavs, module).add('Base nav', () => <p>on progress</p>);
storiesOf(componentNavs, module).add('Horizontal center aligned', () => <p>on progress</p>);
storiesOf(componentNavs, module).add('Horizontal right aligned', () => <p>on progress</p>);
storiesOf(componentNavs, module).add('Vertical', () => <p>on progress</p>);
storiesOf(componentNavs, module).add('Tabs', () => <p>on progress</p>);
storiesOf(componentNavs, module).add('Pills', () => <p>on progress</p>);
storiesOf(componentNavs, module).add('Fill and justify', () => <p>on progress</p>);
storiesOf(componentNavs, module).add('Tabs with dropdowns', () => <p>on progress</p>);
storiesOf(componentNavs, module).add('Pills with dropdowns', () => <p>on progress</p>);
storiesOf(componentNavs, module).add('JavaScript behavior', () => <p>on progress</p>);

const componentNavbar = 'Components/Navbar';
storiesOf(componentNavbar, module).add('Basic example', () => <p>on progress</p>);
storiesOf(componentNavbar, module).add('Forms', () => <p>on progress</p>);

const componentPagination = 'Components/Pagination';
storiesOf(componentPagination, module).add('Basic example', () => <p>on progress</p>);
storiesOf(componentPagination, module).add('Disabled and active states', () => <p>on progress</p>);
storiesOf(componentPagination, module).add('Sizing', () => <p>on progress</p>);
storiesOf(componentPagination, module).add('Alignment', () => <p>on progress</p>);

const componentPopovers = 'Components/Popovers';
storiesOf(componentPopovers, module).add('Directions', () => <p>on progress</p>);
storiesOf(componentPopovers, module).add('Disabled elements', () => <p>on progress</p>);

const componentProgress = 'Components/Progress';
storiesOf(componentProgress, module).add('Basic example', () => <p>on progress</p>);
storiesOf(componentProgress, module).add('Labels', () => <p>on progress</p>);
storiesOf(componentProgress, module).add('Backgrounds', () => <p>on progress</p>);
storiesOf(componentProgress, module).add('Multiple bars', () => <p>on progress</p>);
storiesOf(componentProgress, module).add('Striped', () => <p>on progress</p>);
storiesOf(componentProgress, module).add('Animated stripes', () => <p>on progress</p>);

const componentSpinners = 'Components/Spinners';
storiesOf(componentSpinners, module).add('Basic example', () => <p>on progress</p>);
storiesOf(componentSpinners, module).add('Colors', () => <p>on progress</p>);
storiesOf(componentSpinners, module).add('Sizing', () => <p>on progress</p>);
storiesOf(componentSpinners, module).add('Buttons', () => <p>on progress</p>);

const componentToasts = 'Components/Toasts';
storiesOf(componentToasts, module).add('Basic example', () => <p>on progress</p>);
storiesOf(componentToasts, module).add('Placement', () => <p>on progress</p>);
storiesOf(componentToasts, module).add('Variant colors', () => <p>on progress</p>);

const componentTooltip = 'Components/Tooltip';
storiesOf(componentTooltip, module).add('Directions', () => <p>on progress</p>);
storiesOf(componentTooltip, module).add('Disabled elements', () => <p>on progress</p>);

const uikitDetail = 'UI KIT/Detail';
storiesOf(uikitDetail, module).add('General', () => <p>on progress</p>);
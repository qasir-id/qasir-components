import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Overview/Start', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const layoutContainer = 'Layout/Container';
storiesOf(layoutContainer, module).add('Fluid container', () => <Welcome showApp={linkTo('Button')} />);
storiesOf(layoutContainer, module).add('Fixed container', () => <Welcome showApp={linkTo('Button')} />);

const layoutLevel = 'Layout/Level';
storiesOf(layoutLevel, module).add('Horizontal level', () => <Welcome showApp={linkTo('Button')} />);
storiesOf(layoutLevel, module).add('Centered level', () => <Welcome showApp={linkTo('Button')} />);
storiesOf(layoutLevel, module).add('Mobile level', () => <Welcome showApp={linkTo('Button')} />);

const formGeneral = 'Form/General';
storiesOf(formGeneral, module).add('Form field', () => <Welcome showApp={linkTo('Button')} />);
storiesOf(formGeneral, module).add('Form control', () => <Welcome showApp={linkTo('Button')} />);
storiesOf(formGeneral, module).add('With icons', () => <Welcome showApp={linkTo('Button')} />);
storiesOf(formGeneral, module).add('Form addons', () => <Welcome showApp={linkTo('Button')} />);
storiesOf(formGeneral, module).add('Form group', () => <Welcome showApp={linkTo('Button')} />);
storiesOf(formGeneral, module).add('Horizontal form', () => <Welcome showApp={linkTo('Button')} />);
storiesOf(formGeneral, module).add('Vertical form', () => <Welcome showApp={linkTo('Button')} />);
storiesOf(formGeneral, module).add('Disabled form', () => <Welcome showApp={linkTo('Button')} />);

const componentAlert = 'Components/Alert';
storiesOf(componentAlert, module).add('General', () => <Welcome showApp={linkTo('Button')} />);
storiesOf(componentAlert, module).add('Link color', () => <Welcome showApp={linkTo('Button')} />);
storiesOf(componentAlert, module).add('Additional content', () => <Welcome showApp={linkTo('Button')} />);
storiesOf(componentAlert, module).add('Dismissing', () => <Welcome showApp={linkTo('Button')} />);
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import Modal, { SIZE } from './modal';
import ModalBody from './modalbody';
import ModalHeader from './modalheader';
import ModalFooter from './modalfooter';

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Modal
---
~~~js
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'qasir/lib/base;
~~~

or
~~~js
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'qasir/lib/base/modal;
~~~

Usage 
~~~js
<Modal>
  <ModalHeader>Your title</ModalHeader>
  <ModalBody>Body content</ModalBody>
  <ModalFooter>Footer Content</ModalFooter>
</Modal>
~~~
`;

storiesOf('base|Modal', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <Modal
      isOpen={boolean('isOpen', true)}
      size={select('size', SIZE, 'normal')}
    >
      <ModalHeader toggle={() => alert('close')}>This is header</ModalHeader>
      <ModalBody>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </ModalBody>
      <ModalFooter>This is modal footer</ModalFooter>
    </Modal>
  ));

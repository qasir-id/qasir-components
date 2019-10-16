import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Modal from './modal';
import ModalBody from './modalbody';
import ModalHeader from './modalheader';
import ModalFooter from './modalfooter';

import Text from '../text';
import Input from '../input';
import Button from '../button';

const Block = styled.div`
  padding-bottom: 1px;
`;

storiesOf('base|Modal', module)
  .addParameters({
    info: {
      disable: true
    }
  })
  .add('extended', () => React.createElement(() => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
      <>
          <Button onClick={toggle}>Open Modal</Button>
          <Modal isOpen={modal}>
            <ModalHeader toggle={toggle}>
              <Text variant="h5" color="black">
                Tambah Variasi
              </Text>
            </ModalHeader>
            <ModalBody>
              <Block>
                <Input label="Nama Variasi" value="Regular" />
              </Block>

              <Block>
                <Input label="SKU" value="ASDF5312" />
              </Block>
              <Block>
                <Input label="Harga Jual" value="Rp12.000" />
              </Block>
              <Block>
                <Input label="Harga Modal" value="Rp5.000" />
              </Block>
            </ModalBody>
            <ModalFooter>
              <div style={{ textAlign: 'right' }}>
                <Button onClick={toggle} variant="secondary" style={{ marginRight: 10 }}>
                  Tutup
                </Button>
                <Button onClick={() => alert('submit')}>Simpan</Button>
              </div>
            </ModalFooter>
          </Modal>
      </>
    );
  })
  );

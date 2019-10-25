import React from 'react';
import { storiesOf } from '@storybook/react';

import styled, { css } from 'styled-components';

import Tab from './tab';
import TabItem from './tab-item';
import Card from '../card';
import Text from '../text';
import { Row, Col } from '../grid';
import Button from '../button';
import EmptyState from '../empty-state';
import Skeleton from '../skeleton';

export const tabStyle = css`
  .c-tab__menu-container {
    background: white;
    padding: 0 15px 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

export const inside = css`
  margin-left: 16px;
`;

export const cardStyle = {
  borderTopLeftRadius: '0',
  borderTopRightRadius: '0',
  marginTop: '1px'
};

export const CardBox = styled.div`
  padding: 12px;
  overflow: hidden;
`;

const Deposit = (
  <>
    <Card style={cardStyle}>
      <CardBox>
        <Row>
          <Col span={12}>
            <Text
              tag="div"
              variant="ui-small"
              color="neutral"
              style={{ marginBottom: 5 }}
            >
              Total Deposit
            </Text>
            <Text tag="div" variant="ui-baseline" weight="bold">
              Rp15.000
            </Text>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button>Top up</Button>
          </Col>
        </Row>
      </CardBox>
    </Card>

    <div style={{ padding: 30 }}>
      <EmptyState
        img={
          'data:image/png;base64,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'
        }
        imgWidth={300}
        title="Belum ada transaksi"
        otherComponent={
          <Button variant="outline-primary">Belanja Sekarang</Button>
        }
      />
    </div>
  </>
);

const Komisi = (
  <>
    <Card style={cardStyle}>
      <CardBox>
        <Row>
          <Col span={12} style={{ textAlign: 'center' }}>
            <Text
              tag="div"
              color="neutral"
              variant="ui-small"
              style={{ marginBottom: 5 }}
            >
              Komisi Aktif
            </Text>
            <Text tag="div" weight="bold">
              Rp500.000
            </Text>
          </Col>
          <Col span={12} style={{ textAlign: 'center' }}>
            <Text
              tag="div"
              color="neutral"
              variant="ui-small"
              style={{ marginBottom: 5 }}
            >
              Komisi Pending
            </Text>
            <Text tag="div" weight="bold">
              Rp1.500.000
            </Text>
          </Col>
        </Row>
      </CardBox>
    </Card>
    <div style={{ padding: '30px 0' }}>
      {new Array(5).fill('').map(index => (
        <Card key={index} style={{ marginBottom: 15 }}>
          <Row>
            <Col span={8}>
              <Skeleton width="100%" height="75px" />
            </Col>
            <Col span={16}>
              <div css={inside}>
                <Skeleton width="100%" radius={8} />
                <Skeleton width="100%" radius={8} />
                <Skeleton width="100%" radius={8} />
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  </>
);

storiesOf('base|Tab', module)
  .addParameters({
    info: {
      disable: true
    }
  })
  .add('example extend', () => (
    <div
      style={{ background: '#f2f4f7', minHeight: '100vh', padding: '30px 5px' }}
    >
      <div style={{ maxWidth: 480, margin: 'auto' }}>
        <Tab css={tabStyle}>
          <TabItem title="Deposit">{Deposit}</TabItem>
          <TabItem title="Komisi">{Komisi}</TabItem>
        </Tab>
      </div>
    </div>
  ));

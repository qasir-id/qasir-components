/* eslint-disable react/display-name */
import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import * as v from '../../shared/constants/variables';

import Text from '../text';

const Card = styled.div`
  width: 180px;
  height: 208px;
  display: inline-block;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 12px;
  border-radius: 2px;
  font-size: 0.9375rem;
`;

const CardInfo = styled.div`
  position: absolute;
  width: 100%;
  bottom: 4px;
  background: #fff;
  padding: 16px;
  color: #a0a4a8;
`;

const Code = styled.code`
  color: gray;
`;

storiesOf('base|Color', module)
  .addParameters({
    info: {
      disable: true
    }
  })
  .add('QUI Colors', () => (
    <>
      <div>
        <h3 style={{ marginBottom: 30, marginTop: 40, marginLeft: 15 }}>
          Primary Colors
        </h3>
        <Card style={{ backgroundColor: v.color.black }}>
          <CardInfo>
            <Text tag="div" weight="bold" color="black">
              BLACK
            </Text>
            <Text tag="p" style={{ marginTop: 5, zIndex: 10 }}>
              HEX: {v.color.black}
            </Text>
            <Code>v.color.black</Code>
          </CardInfo>
        </Card>
        <Card style={{ backgroundColor: v.color.grey }}>
          <CardInfo>
            <Text tag="div" weight="bold" color="black">
              GREY
            </Text>
            <Text tag="p" style={{ marginTop: 5, zIndex: 10 }}>
              HEX: {v.color.grey}
            </Text>
            <Code>v.color.grey</Code>
          </CardInfo>
        </Card>
        <Card style={{ backgroundColor: v.color.white }}>
          <CardInfo>
            <Text tag="div" weight="bold" color="black">
              WHITE
            </Text>
            <Text tag="p" style={{ marginTop: 5, zIndex: 10 }}>
              HEX: {v.color.white}
            </Text>
            <Code>v.color.white</Code>
          </CardInfo>
        </Card>
        <Card style={{ backgroundColor: v.color.red }}>
          <CardInfo>
            <Text tag="div" weight="bold" color="black">
              RED
            </Text>
            <Text tag="p" style={{ marginTop: 5, zIndex: 10 }}>
              HEX: {v.color.red}
            </Text>
            <Code>v.color.red</Code>
          </CardInfo>
        </Card>
      </div>
      <div>
        <h3 style={{ marginBottom: 30, marginTop: 40, marginLeft: 15 }}>
          Secondary Colors
        </h3>
        <Card style={{ backgroundColor: v.color.blue }}>
          <CardInfo>
            <Text tag="div" weight="bold" color="black">
              BLUE
            </Text>
            <Text tag="p" style={{ marginTop: 5, zIndex: 10 }}>
              HEX: {v.color.blue}
            </Text>
            <Code>v.color.blue</Code>
          </CardInfo>
        </Card>
        <Card style={{ backgroundColor: v.color.orange }}>
          <CardInfo>
            <Text tag="div" weight="bold" color="black">
              ORANGE
            </Text>
            <Text tag="p" style={{ marginTop: 5, zIndex: 10 }}>
              HEX: {v.color.orange}
            </Text>
            <Code>v.color.orange</Code>
          </CardInfo>
        </Card>
      </div>
    </>
  ));

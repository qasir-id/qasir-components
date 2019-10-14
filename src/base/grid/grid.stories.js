import React from 'react';
import { storiesOf } from '@storybook/react';

import Col from './col';
import Row from './row';

const Column = {
  background: 'rgba(0, 160, 233, 0.7)',
  minHeight: '30px',
  marginTop: '8px',
  marginBottom: '8px',
  padding: '20px 0',
  color: '#fff',
  textAlign: 'center',
  borderRadius: '0',
  fontSize: '14px'
};

const Odd = {
  background: '#00a0e9',
  minHeight: '30px',
  marginTop: '8px',
  marginBottom: '8px',
  padding: '20px 0',
  color: '#fff',
  textAlign: 'center',
  borderRadius: '0',
  fontSize: '14px'
};

/**
 * Put here:
 * - description
 */
const DESCRIPTION = `
Grid
---
This component temporary extend from antd grid

~~~js
import Row from 'qasir/lib/base;
import Col from 'qasir/lib/base;
~~~
or
~~~js
import Row from 'qasir/lib/base/grid;
import Col from 'qasir/lib/base/grid;
~~~

Usage
~~~js
<Row>
    <Col span={12}>col-12</Col>
    <Col span={12}>col-12</Col>
</Row>
~~~

`;

storiesOf('base|Grid', module)
  .addParameters({
    info: {
      text: DESCRIPTION
    }
  })
  .add('example', () => (
    <div>
      <Row>
        <Col span={12} style={Column}>
          col-12
        </Col>
        <Col span={12} style={Odd}>
          col-12
        </Col>
      </Row>
      <Row>
        <Col span={8} style={Column}>
          col-8
        </Col>
        <Col span={8} style={Odd}>
          col-8
        </Col>
        <Col span={8} style={Column}>
          col-8
        </Col>
      </Row>
      <Col>
        <Col span={6} style={Column}>
          col-6
        </Col>
        <Col span={6} style={Odd}>
          col-6
        </Col>
        <Col span={6} style={Column}>
          col-6
        </Col>
        <Col span={6} style={Odd}>
          col-6
        </Col>
      </Col>
    </div>
  ));

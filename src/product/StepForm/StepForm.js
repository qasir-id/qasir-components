import React from 'react';
import PropTypes from 'prop-types';
import Steps from 'antd/es/steps';

import { Button, Text } from '../../base';

import * as Style from './StepForm.style';

const { Step } = Steps;

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.currentIndex,
      length: this.props.currentIndex + 2
    };
  }

  next = e => {
    const current = this.state.current + 1;
    const length = this.state.length - 1;
    this.setState({ current, length });

    this.props.onClickNext && this.props.onClickNext(e);
  };

  // prev() {
  //   const current = this.state.current - 1;
  //   this.setState({ current });
  // }

  render() {
    const { current, length } = this.state;
    const { stepContent, labelStepRemain, onClickFinish } = this.props;
    const stepLength = length;

    return (
      <Style.Wrapper>
        <Steps current={current}>
          {stepContent.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <Style.Content>{stepContent[current].content}</Style.Content>
        <Style.Footer>
          {current < stepContent.length - 1 && (
            <>
              <Text>{[stepLength, ' ', labelStepRemain]}</Text>
              <Button onClick={this.next}>Selanjutnya</Button>
            </>
          )}

          {current === stepContent.length - 1 && (
            <>
              <div />
              <Button onClick={onClickFinish}>Done</Button>
            </>
          )}
        </Style.Footer>
      </Style.Wrapper>
    );
  }
}

StepForm.propTypes = {
  title: PropTypes.string,
  stepContent: PropTypes.array.isRequired,
  currentIndex: PropTypes.number,
  labelStepRemain: PropTypes.string,
  onClickNext: PropTypes.func,
  onClickFinish: PropTypes.func
};

StepForm.defaultProps = {
  stepContent: [],
  currentIndex: 0,
  labelStepRemain: 'langkah lagi'
};

export default StepForm;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Text from '../text';

import * as Style from './textarea.styles';

class Textarea extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      characterCount: (props.value && props.value.length) || 0,
      currVal: props.value
    };
  }

  handleInputChange = e => {
    this.setState({
      currVal: e.target.value,
      characterCount: e.target.value.length
    });
    // this.props.onChange && this.props.onChange(e);
  };

  render() {
    const active = this.state.currVal !== '';

    const {
      className,
      rows,
      label,
      value,
      isDisabled,
      error,
      errorMessage,
      maxLength,
      showCharacterCount,
      ...props
    } = this.props;
    return (
      <>
        <Style.Container data-error={error ? 'true' : undefined}>
          <Style.Field
            {...props}
            className={className}
            disabled={isDisabled}
            onChange={this.handleInputChange}
            value={this.state.currVal}
            rows={rows}
            maxLength={maxLength}
            ref={this.props.innerRef}
          />
          <Style.Label data-active={active}>{label}</Style.Label>
        </Style.Container>
        {showCharacterCount && (
          <Text
            tag="div"
            variant="ui-tiny"
            color="neutral"
            style={{ textAlign: 'right', marginTop: 4 }}
          >
            {this.state.characterCount} / {maxLength}
          </Text>
        )}
        {error && errorMessage !== '' && (
          <Text
            variant="ui-tiny"
            color="alert"
            tag="div"
            style={{ paddingLeft: 18, paddingTop: 8 }}
          >
            {errorMessage}
          </Text>
        )}
      </>
    );
  }
}

Textarea.propTypes = {
  /**
   * Class name of the outer wrapper.
   */
  className: PropTypes.string,
  /**
   * Input label, if not empty this props will change default placeholder
   */
  label: PropTypes.string,
  /**
   * Set input default value
   */
  value: PropTypes.string,
  /**
   * Specify textarea row height
   */
  rows: PropTypes.number,
  /**
   * Set input to disable state
   */
  isDisabled: PropTypes.bool,
  /**
   * Set input to disable state
   */
  error: PropTypes.bool,
  /**
   * Error message text
   */
  errorMessage: PropTypes.string,
  /**
   * Set maximum character length if any
   */
  maxLength: PropTypes.number,
  showCharacterCount: PropTypes.bool
  // onChange: PropTypes.func
};

Textarea.defaultProps = {
  className: undefined,
  rows: 2,
  label: undefined,
  value: '',
  isDisabled: false,
  error: false,
  errorMessage: 'Wajib diisi',
  showCharacterCount: false
  // onChange: () => {}
};

export default React.forwardRef((props, ref) => (
  <Textarea innerRef={ref} {...props} />
));

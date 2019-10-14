import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  InputTag,
  Wrapper,
  Label,
  Container,
  Pref,
  Suff
} from './input.styles';
import Text from '../text';

export const VARIANT = {
  normal: 'normal',
  material: 'material'
};

class Input extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      characterCount: (props.value && props.value.length) || 0,
      currVal: props.value
    };
  }

  static getDerivedStateFromProps(nextProps, props) {
    if (props.value !== nextProps.value) {
      const state = {
        currVal: nextProps.value
      };
      // Update character count if props value change
      if (props.showCharacterCount) {
        state.characterCount = nextProps.value.length;
      }
      //   setState(state);
    }
  }

  handleInputChange = e => {
    this.setState({
      currVal: e.target.value
    });
  };

  render() {
    const active = this.state.currVal !== '';

    const {
      className,
      type,
      label,
      placeholder,
      value,
      isDisabled,
      error,
      errorMessage,
      variant,
      prefix,
      suffix,
      ...props
    } = this.props;

    const addonStyle = {
      paddingLeft: prefix && variant === 'normal' ? 0 : undefined,
      paddingRight: prefix && variant === 'normal' ? 0 : undefined
    };

    return (
      <Wrapper>
        <Container data-error={error ? 'true' : undefined}>
          {variant === 'normal' && prefix && <Pref>{prefix}</Pref>}
          <InputTag
            {...props}
            className={className}
            type={type}
            onChange={this.handleInputChange}
            disabled={isDisabled}
            value={this.state.currVal}
            placeholder={variant === 'normal' ? label : undefined}
            style={addonStyle}
          />
          {variant === 'normal' && suffix && <Suff>{suffix}</Suff>}
          {variant === 'material' && (
            <Label data-active={active}>{label}</Label>
          )}
        </Container>

        {error && errorMessage !== '' && (
          <Text
            variant="ui-tiny"
            color="red"
            tag="div"
            style={{ paddingLeft: 18, paddingTop: 8 }}
          >
            {errorMessage}
          </Text>
        )}
      </Wrapper>
    );
  }
}

Input.propTypes = {
  /**
   * Class name of the outer wrapper.
   */
  className: PropTypes.string,
  /**
   * HTML type of input, example: `text`, `email` or `password`
   */
  type: PropTypes.string,
  /**
   * Input label, if not empty this props will change default placeholder
   */
  label: PropTypes.string,
  /**
   * Variant of the text, Must be one of these: `material` or `normal`.
   */
  variant: PropTypes.oneOf(Object.keys(VARIANT).map(type => VARIANT[type])),
  /**
   * Set input default value
   */
  value: PropTypes.string,
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
   * Content before input
   */
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Content after input
   */
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

Input.defaultProps = {
  className: undefined,
  variant: 'material',
  type: 'text',
  label: undefined,
  value: '',
  isDisabled: false,
  error: false,
  errorMessage: 'Wajib diisi',
  prefix: undefined,
  suffix: undefined
};

export default Input;

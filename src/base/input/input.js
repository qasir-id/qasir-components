import React, { Component } from 'react';
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

class Input extends Component {
  render() {
    const {
      className,
      type,
      label,
      placeholder,
      isDisabled,
      error,
      errorMessage,
      variant,
      prefix,
      suffix,
      value,
      ...props
    } = this.props;

    // const active = value !== '' || value !== undefined;

    const addonStyle = {
      paddingLeft: prefix && variant === 'normal' ? 0 : undefined,
      paddingRight: prefix && variant === 'normal' ? 0 : undefined
    };

    return (
      <Wrapper
        className={className}
        style={{ display: type === 'hidden' ? 'none' : undefined }}
      >
        <Container data-error={error ? 'true' : undefined}>
          {variant === 'normal' && prefix && <Pref>{prefix}</Pref>}
          <InputTag
            {...props}
            value={value}
            type={type}
            disabled={isDisabled}
            placeholder={variant === 'normal' ? label : ' '}
            style={addonStyle}
            ref={this.props.innerRef}
          />
          {suffix && <Suff>{suffix}</Suff>}
          {variant === 'material' && <Label className="label">{label}</Label>}
        </Container>

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
   * Set input to error
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
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChange: PropTypes.func
};

Input.defaultProps = {
  className: undefined,
  variant: 'material',
  type: 'text',
  label: undefined,
  value: undefined,
  isDisabled: false,
  error: false,
  errorMessage: 'Wajib diisi',
  prefix: undefined,
  suffix: undefined
  // onChange: () => {}
};

// export default Input;

export default React.forwardRef((props, ref) => (
  <Input innerRef={ref} {...props} />
));

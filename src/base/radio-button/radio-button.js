import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uid from '../../helper/uniqueId';

import * as Style from './radio-button.styles';

class RadioButton extends PureComponent {
  uid = this.props.id || uid();

  static propTypes = {
    /**
     * Specify whether the <RadioButton> is currently checked
     */
    checked: PropTypes.bool,

    /**
     * Provide an optional className to be applied to the containing node
     */
    className: PropTypes.string,

    /**
     * Specify whether the <RadioButton> should be checked by default
     */
    defaultChecked: PropTypes.bool,

    /**
     * Specify whether the control is disabled
     */
    disabled: PropTypes.bool,

    /**
     * Provide a unique id for the underlying <input> node
     */
    id: PropTypes.string,

    /**
     * Provide label text to be read by screen readers when interacting with the
     * control
     */
    labelText: PropTypes.node,

    /**
     * Specify whether the label should be hidden, or not
     */
    hideLabel: PropTypes.bool,

    /**
     * Provide a name for the underlying <input> node
     */
    name: PropTypes.string,

    /**
     * Provide a handler that is invoked when a user clicks on the control
     */
    onClick: PropTypes.func,

    /**
     * Provide an optional `onChange` hook that is called each time the value of
     * the underlying <input> changes
     */
    onChange: PropTypes.func,

    /**
     * Specify the value of the <RadioButton>
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    labelText: '',
    onChange: () => {},
    value: '',
    hideLabel: false
  };

  handleChange = evt => {
    this.props.onChange(this.props.value, this.props.name, evt);

    const isDisabled = this.props.disabled;

    if (isDisabled) {
      evt.preventDefault();
    }
  };

  render() {
    const {
      className,
      labelText,
      innerRef: ref,
      hideLabel,
      disabled,
      ...props
    } = this.props;

    return (
      <Style.Wrapper>
        <input
          {...props}
          type="radio"
          onChange={this.handleChange}
          id={this.uid}
          disabled={disabled}
          ref={ref}
        />
        <Style.Label
          className="label"
          htmlFor={this.uid}
        >
          <Style.Radio className="radio" />
          {!hideLabel && <Style.LabelContent>{labelText}</Style.LabelContent>}
        </Style.Label>
      </Style.Wrapper>
    );
  }
}

export default (() => {
  const forwardRef = (props, ref) => <RadioButton {...props} innerRef={ref} />;
  forwardRef.displayName = 'RadioButton';
  return React.forwardRef(forwardRef);
})();

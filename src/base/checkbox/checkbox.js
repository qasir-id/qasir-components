import PropTypes from 'prop-types';
import React from 'react';
import * as Style from './checkbox.styles';

const Checkbox = React.forwardRef(
  (
    {
      className,
      id,
      labelText,
      onChange,
      indeterminate,
      hideLabel,
      wrapperClassName,
      title = '',
      ...other
    },
    ref
  ) => (
    <Style.Wrapper>
      <input
        {...other}
        type="checkbox"
        onChange={evt => {
          onChange(evt.target.checked, id, evt);
        }}
        id={id}
        ref={el => {
          if (el) {
            el.indeterminate = indeterminate;
          }
          if (typeof ref === 'function') {
            ref(el);
          } else if (Object(ref) === ref) {
            ref.current = el;
          }
        }}
      />
      <Style.Label className="label" htmlFor={id} title={title || null}>
        {!hideLabel && <Style.LabelContent>{labelText}</Style.LabelContent>}
      </Style.Label>
    </Style.Wrapper>
  )
);

Checkbox.propTypes = {
  /**
   * Specify whether the underlying input should be checked
   */
  checked: PropTypes.bool,

  /**
   * Specify whether the underlying input should be checked by default
   */
  defaultChecked: PropTypes.bool,

  /**
   * Specify whether the Checkbox is in an indeterminate state
   */
  indeterminate: PropTypes.bool,

  /**
   * Specify an optional className to be applied to the <label> node
   */
  className: PropTypes.string,

  /**
   * Specify whether the Checkbox should be disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provide an `id` to uniquely identify the Checkbox input
   */
  id: PropTypes.string.isRequired,

  /**
   * Provide a label to provide a description of the Checkbox input that you are
   * exposing to the user
   */
  labelText: PropTypes.node.isRequired,

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes.bool,

  /**
   * Receives three arguments: true/false, the checkbox's id, and the dom event.
   * `(value, id, event) => console.log({value, id, event})`
   */
  onChange: PropTypes.func,

  /**
   * Specify a title for the <label> node for the Checkbox
   */
  title: PropTypes.string,

  /**
   * The CSS class name to be placed on the wrapping element
   */
  wrapperClassName: PropTypes.string
};

Checkbox.defaultProps = {
  onChange: () => {},
  indeterminate: false,
  hideLabel: false
};

export default Checkbox;

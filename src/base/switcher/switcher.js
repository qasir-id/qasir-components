import React from 'react';
import PropTypes from 'prop-types';
import setupGetInstanceId from '../../helper/setupGetInstanceId';
import { keys, match } from '../../helper/key';

import * as Styled from './switcher.styles';

const getInstanceId = setupGetInstanceId();

class Switcher extends React.Component {
  static propTypes = {
    /**
     * Specify a custom className to apply to the form-item node
     */
    className: PropTypes.string,

    /**
     * Specify whether the toggle should be on by default
     */
    defaultToggled: PropTypes.bool,

    /**
     * Provide an optional hook that is called when the control is toggled
     */
    onToggle: PropTypes.func,

    /**
     * Provide an id that unique represents the underlying <input>
     */
    id: PropTypes.string.isRequired,

    /**
     * Specify whether the control is toggled
     */
    toggled: PropTypes.bool,

    /**
     * Specify the label for the "off" position
     */
    labelA: PropTypes.string,

    /**
     * Specify the label for the "on" position
     */
    labelB: PropTypes.string,

    /**
     * Specify the label for the `on off` will be hidden or not
     */
    hideLabel: PropTypes.bool
  };

  static defaultProps = {
    defaultToggled: false,
    labelA: 'Off',
    labelB: 'On',
    onToggle: () => {}
  };

  render() {
    const {
      className,
      defaultToggled,
      toggled,
      onChange,
      onToggle,
      id = (this.inputId = this.inputId || `__qsr-toggle_${getInstanceId()}`),
      labelText,
      labelA,
      labelB,
      hideLabel,
      ...other
    } = this.props;

    let input;

    const checkedProps = {};

    if (typeof toggled !== 'undefined') {
      checkedProps.checked = toggled;
    } else {
      checkedProps.defaultChecked = defaultToggled;
    }

    const labelTextId = !labelText ? undefined : `${id}-label`;

    return (
      <>
        <Styled.Wrapper>
          <input
            {...other}
            {...checkedProps}
            type="checkbox"
            id={id}
            aria-labelledby={labelTextId}
            onChange={evt => {
              onChange && onChange(evt);
              onToggle(input.checked, id, evt);
            }}
            ref={el => {
              input = el;
            }}
            onKeyUp={evt => {
              if (match(evt, keys.ENTER)) {
                input.checked = !input.checked;
                onChange(evt);
                onToggle(input.checked, id, evt);
              }
            }}
          />

          <Styled.Label className="label" htmlFor={id}>
            <Styled.Switch className="switch">
              {!hideLabel && (
                <>
                  <Styled.LabelSpan className="toggle-left" aria-hidden="true">
                    {labelA}
                  </Styled.LabelSpan>
                  <Styled.LabelSpan className="toggle-right" aria-hidden="true">
                    {labelB}
                  </Styled.LabelSpan>
                </>
              )}
            </Styled.Switch>
          </Styled.Label>
        </Styled.Wrapper>
      </>
    );
  }
}

export default Switcher;

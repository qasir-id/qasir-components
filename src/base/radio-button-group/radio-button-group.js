import PropTypes from 'prop-types';
import React from 'react';
import RadioButton from '../radio-button/radio-button';
import * as Style from './radio-button-group.styles';

export default class RadioButtonGroup extends React.Component {
  state = { selected: this.props.valueSelected || this.props.defaultSelected };

  static propTypes = {
    /**
     * Provide a collection of <RadioButton> components to render in the group
     */
    children: PropTypes.node,

    /**
     * Provide an optional className to be applied to the container node
     */
    className: PropTypes.string,

    /**
     * Specify the <RadioButton> to be selected by default
     */
    defaultSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Specify the name of the underlying <input> nodes
     */
    name: PropTypes.string.isRequired,

    /**
     * Provide an optional `onChange` hook that is called whenever the value of
     * the group changes
     */
    onChange: PropTypes.func,

    /**
     * Specify the value that is currently selected in the group
     */
    valueSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    onChange: () => {}
  };

  static getDerivedStateFromProps({ valueSelected, defaultSelected }, state) {
    const { prevValueSelected } = state;
    return prevValueSelected === valueSelected
      ? null
      : {
        selected: valueSelected || defaultSelected,
        prevValueSelected: valueSelected
      };
  }

  getRadioButtons = () => {
    const children = React.Children.map(this.props.children, radioButton => {
      const { value, ...other } = radioButton.props;

      return (
        <RadioButton
          {...other}
          name={this.props.name}
          key={value}
          value={value}
          onChange={this.handleChange}
          checked={value === this.state.selected}
        />
      );
    });

    return children;
  };

  handleChange = (newSelection, evt) => {
    if (newSelection !== this.state.selected) {
      this.setState({ selected: newSelection });
      this.props.onChange(newSelection, this.props.name, evt);
    }
  };

  render() {
    const { className } = this.props;

    return (
      <Style.Wrapper>
        <Style.Container className={className}>
          {this.getRadioButtons()}
        </Style.Container>
      </Style.Wrapper>
    );
  }
}

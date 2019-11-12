import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select as AntdSelect } from 'antd';
import { SelectStyles } from './select.styles';

// export const { Option } = AntdSelect;

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  handleChange = e => {
    this.setState({
      value: e
    });
    this.props.onChange && this.props.onChange(e);
  };

  render() {
    return (
      <>
        <SelectStyles />
        <div className="qselect">
          <label
            className="label"
            style={{
              display: this.state.value !== undefined ? undefined : 'none'
            }}
          >
            {this.props.placeholder}
          </label>
          <AntdSelect
            {...this.props}
            dropdownClassName="qselectdropdown"
            onChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}

Select.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  notFoundContent: PropTypes.node,
  showSearch: PropTypes.bool,
  optionLabelProp: PropTypes.string,
  transitionName: PropTypes.string,
  choiceTransitionName: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Select;

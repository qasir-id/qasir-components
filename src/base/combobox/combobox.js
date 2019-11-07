import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SelectSearch from 'react-select-search';

import Input from '../input';
import * as Style from './combobox.styles';

class Combobox extends PureComponent {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      active: false
    };
  }

  // eslint-disable-next-line no-unused-vars
  //   handleInputFocus = (value, state, props) => {
  //     if (value === undefined) {
  //       this.setState({
  //         active: true
  //       });
  //     }
  //     this.props.onFocus && this.props.onFocus(e);
  //   };

  //   // eslint-disable-next-line no-unused-vars
  //   handleInputBlur = (value, state, props) => {
  //     if (value === undefined) {
  //       this.setState({
  //         active: false
  //       });
  //     }
  //     this.props.onBlur && this.props.onBlur(e);
  //   };

  handleTrigger = (e) => {
    console.log(e);
  };

  render() {
    const {
      options,
      className,
      search,
      placeholder,
      multiple,
      height,
      autoComplete,
      name,
      autofocus,
      fuse,
      onChange,
      onHighlight,
      onMount,
      onBlur,
      onFocus,
      renderOption,
      renderValue,
      renderGroupHeader,
      value,
      label,
      ...props
    } = this.props;

    return (
      <Style.Combo>
        <Input type="search" label={label} onChange={this.handleTrigger} />
        <SelectSearch
          {...props}
          className="qui"
          options={options}
          height={height}
          search={search}
          multiple={multiple}
          autoComplete={autoComplete}
          name={name}
          autofocus={autofocus}
          fuse={fuse}
          onChange={onChange}
          onHighlight={onHighlight}
          onMount={onMount}
          onBlur={onBlur}
          onFocus={onFocus}
          renderOption={renderOption}
          renderValue={renderValue}
          renderGroupHeader={renderGroupHeader}
          placeholder={placeholder}
          ref={this.myRef}
        />
      </Style.Combo>
    );
  }
}

Combobox.propTypes = {
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  search: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  multiple: PropTypes.bool,
  height: PropTypes.number,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  name: PropTypes.string,
  autofocus: PropTypes.bool,
  fuse: PropTypes.object,
  onChange: PropTypes.func,
  onHighlight: PropTypes.func,
  onMount: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  renderOption: PropTypes.func,
  renderValue: PropTypes.func,
  renderGroupHeader: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

Combobox.defaultProps = {
  options: []
};

export default React.forwardRef((props, ref) => (
  <Combobox outInput={ref} {...props} />
));

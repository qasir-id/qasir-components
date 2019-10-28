import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// dependencies
import Input from '../input';

// Icon
import Visible from '../svg-icon/svg/visible';
import Invisible from '../svg-icon/svg/invisible';

export const VARIANT = {
  normal: 'normal',
  material: 'material'
};

const Icon = styled.div`
  cursor: pointer;
  text-align: center;
`;

class InputPassword extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: this.props.value
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    if (this.props.value) {
      this.setState({ password: this.props.value });
    }
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
    this.props.onChange && this.props.onChange(e);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    const suffixContent = (
      <Icon onClick={this.toggleShow}>
        {!this.state.hidden ? <Visible /> : <Invisible />}
      </Icon>
    );
    return (
      <Input
        {...this.props}
        type={this.state.hidden ? 'password' : 'text'}
        value={this.state.password}
        onChange={this.handlePasswordChange}
        suffix={suffixContent}
        ref={this.props.innerRef}
      />
    );
  }
}

InputPassword.propTypes = {
  /**
   * Class name of the outer wrapper.
   */
  className: PropTypes.string,
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
  onChange: PropTypes.func
};

InputPassword.defaultProps = {
  className: undefined,
  variant: 'material',
  label: undefined,
  value: '',
  isDisabled: false,
  error: false,
  errorMessage: 'Wajib diisi',
  onChange: () => {}
};

export default React.forwardRef((props, ref) => (
  <InputPassword
    innerRef={ref}
    {...props}
  />
));

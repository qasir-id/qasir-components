import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Container, Label } from './select.styles';
import Text from '../text';

class Select extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      selectedId: props.selectedOptionId
    };
  }

  dropdownChanged = e => {
    this.setState({ selectedId: e.target.value });
  };

  render() {
    const active = this.state.selectedId !== undefined;
    const {
      label,
      className,
      options,
      isDisabled,
      error,
      errorMessage,
      selectedOptionId,
      ...props
    } = this.props;
    return (
      <Wrapper>
        <Container
          className={className}
          data-error={error ? 'true' : undefined}
        >
          <select
            {...props}
            defaultValue={this.state.selectedId}
            onChange={this.dropdownChanged}
            ref={this.props.innerRef}
          >
            <option disabled selected />
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <Label data-active={active}>{label}</Label>
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

Select.propTypes = {
  /**
   * Input label, if not empty this props will change default placeholder
   */
  label: PropTypes.string,
  /**
   * Class name of the outer wrapper.
   */
  className: PropTypes.string,
  /**
   * Options of select
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),

  selectedOptionId: PropTypes.string,

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
  errorMessage: PropTypes.string
};

Select.defaultProps = {
  className: undefined,
  label: undefined,
  options: [],
  isDisabled: false,
  error: false,
  errorMessage: 'Wajib diisi',
  selectedOptionId: undefined
};

export default React.forwardRef((props, ref) => (
  <Select innerRef={ref} {...props} />
));

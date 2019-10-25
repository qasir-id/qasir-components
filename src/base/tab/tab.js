import React, { PureComponent, isValidElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/dedupe';
import SwipeableViews from 'react-swipeable-views';
import TabItem from './tab-item';
import styles from './tab.styles';


class Tab extends PureComponent {
  static displayName = 'Tab';

  static propTypes = {
    /**
     * Controls the currently active `TabItem` (controlled & uncontrolled).
     */
    activeIndex: PropTypes.number,
    /**
     * Can be used to render elements inside the tab element.
     * Children can only have the `TabItem` component, otherwise it will be an error.
     */
    // eslint-disable-next-line consistent-return
    children: (props, propName, componentName) => {
      const children = React.Children.toArray(props[propName]);
      const types = [TabItem];
      // eslint-disable-next-line no-restricted-syntax
      for (const index in children) {
        if (children.hasOwnProperty(index)) {
          if (
            !isValidElement(children[index])
            || types
              .map(type => type.displayName)
              .indexOf(children[index].type.displayName) === -1
          ) {
            return new Error(
              `\`${componentName}\` should have child of the following types: \`${types
                .map(type => type.displayName)
                .join('`, ')}\`.`
            );
          }
        }
      }
    },
    /**
     * Class name of the root element.
     */
    className: PropTypes.string,
    onActiveIndexChange: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // Create a ref object
  }

  state = {
    activeIndex: this.props.activeIndex || 0
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.hasOwnProperty('activeIndex')
      && this.props.activeIndex !== nextProps.activeIndex
    ) {
      this.setState(
        {
          activeIndex: nextProps.activeIndex
        },
        () => {
          nextProps.onActiveIndexChange
            && nextProps.onActiveIndexChange(nextProps.activeIndex);
        }
      );
    }
  }

  handleChangeIndex = activeIndex => {
    this.setState(
      {
        activeIndex
      },
      () => {
        // this.executeScroll;
        window.scrollTo(0, this.myRef.current.offsetTop);
      }
    );
  };

  handleTabMenuClick = (index, onClick, event) => {
    const { onActiveIndexChange } = this.props;
    this.setState(
      {
        activeIndex: index
      },
      () => {
        onClick && onClick(index, event);
        onActiveIndexChange && onActiveIndexChange(index);
        window.scrollTo(0, this.myRef.current.offsetTop);
      }
    );
  };

  renderMenu() {
    const totalChild = React.Children.toArray(this.props.children).length;

    return React.Children.map(
      this.props.children,
      /**
       * @param child
       * @param child.type
       * @param child.props
       * @param index
       * @returns {*}
       */
      (child, index) => {
        if (child && child.type.displayName !== TabItem.displayName) {
          return false;
        }

        const { key: childKey, props: childProps } = child;
        const { onClick, subtitle, title, menuProps } = childProps;

        const tabMenuStyle = {};
        const tabMenuLinkStyle = {};

        tabMenuStyle.width = `${100 / totalChild}%`;

        if (totalChild === 1) {
          tabMenuLinkStyle.cursor = 'default';
        }

        const tabMenuClasses = classNames('c-tab__menu', {
          'c-tab__menu--is-active':
            Number(index) === Number(this.state.activeIndex)
        });

        return (
          <li
            {...menuProps}
            key={childKey || index}
            className={tabMenuClasses}
            style={tabMenuStyle}
          >
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <a
              onClick={this.handleTabMenuClick.bind(this, index, onClick)}
              style={tabMenuLinkStyle}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
            >
              <span className="c-tab__title">{title}</span>
              {subtitle && <span className="c-tab__subtitle">{subtitle}</span>}
            </a>
          </li>
        );
      }
    );
  }

  renderBody() {
    return React.Children.map(
      this.props.children,
      /**
       * @param child
       * @param child.type
       * @param child.props
       * @param index
       * @returns {*}
       */
      (child, index) => {
        if (child && child.type.displayName !== TabItem.displayName) {
          return false;
        }

        const { key: childKey, props: childProps } = child;
        const { children, bodyProps } = childProps;
        const tabBodyClasses = classNames('c-tab__body', {
          'c-tab__body--is-active':
            Number(index) === Number(this.state.activeIndex)
        });

        return (
          <div
            {...bodyProps}
            key={childKey || index}
            className={tabBodyClasses}
            style={{ minHeight: 20, width: '100%', display: 'block' }}
          >
            {children}
          </div>
        );
      }
    );
  }

  render() {
    const { className, menuSize, ...props } = this.props;
    delete props.activeIndex;
    delete props.onActiveIndexChange;

    const classes = classNames(
      'c-tab',
      `c-tab--menu-size-${menuSize}`,
      className
    );

    return (
      <div {...props} className={classes} css={styles}>
        <ul ref={this.myRef} className="c-tab__menu-container">
          {this.renderMenu()}
        </ul>
        <SwipeableViews
          index={this.state.activeIndex}
          onChangeIndex={this.handleChangeIndex}
          className="c-tab__body-container"
        >
          {this.renderBody()}
        </SwipeableViews>
      </div>
    );
  }
}

export default Tab;

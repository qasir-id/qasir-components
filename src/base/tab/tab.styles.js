import { css } from 'styled-components';
import * as v from '../../shared/constants/variables';
import * as c from '../../shared/constants/color';
import * as ease from '../../shared/constants/easing';

export default css`
  position: relative;

  /* Tab menu */
  .c-tab__menu-container {
    margin: 0;
    padding: 0;
    width: 100%;
    border-bottom: 2px solid ${c.LightSecondary};
    list-style: none;
    display: table;
    display: flex; 
  }

  .c-tab__menu {
    display: table-cell;
    width: 1px;
    position: relative;
    display: flex;
    align-items: stretch;
    list-style: none; 

    a {
      display: block;
      cursor: pointer;
      text-decoration: none;
      width: 100%;
      color: ${c.DarkNeutral};
      padding: ${v.spacing.ml}px 0;

      &:hover,
      &:focus {
        text-decoration: none;
        outline: none;
      }
    }

    &:after {
      content: '';
      width: 0;
      height: 5px;
      background: transparent;
      position: absolute;
      bottom: -1px;
      left: -3px;
      right: 0;
      transition: all 0.2s ${ease.easeInOutQuad};
      margin: auto;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

    &.c-tab__menu--is-active {
      z-index: 1;

      a {
        color: ${c.RedPrimary};
        border-bottom-color: transparent;
      }

      &:after {
        background: ${c.RedPrimary};
        width: 100%;
      }
    }
  }

  .c-tab__title {
    display: block;
    text-align: center;
    font-weight: 500;
  }

  .c-tab__subtitle {
    display: block;
    margin-top: 4px;
  }

  /* Tab body */
  .c-tab__body-container {
    position: relative;
    margin-top: -1px;
  }

  .c-tab__body {
    @media screen and (min-width: 1025px) {
      display: none;
    }
    &.c-tab__body--is-active {
      display: block;
    }
  }
`;

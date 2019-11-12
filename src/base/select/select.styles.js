import { createGlobalStyle } from 'styled-components';
import 'antd/es/select/style/index.css';
import * as v from '../../shared/constants/variables';
// import * as ease from '../../shared/constants/easing';
import * as c from '../../shared/constants/color';

export const SelectStyles = createGlobalStyle`
  /* Input select Styles */
  .qselect {
    position: relative;
    .label {
      color: #b0b2bb;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 10px;
      top: -10px;
      transition: 300ms ease all;
      font-size: ${v.FontSize.small}px;
      z-index: 10;
      padding: 0 5px;
      background: white;
    }

    .ant-select {
      display: block;

      &-selection {
        border-radius: ${v.inputBorderRadiusLg}px;
        border: 1px solid ${v.inputBorderColor};

        &:hover {
          border-color: ${v.inputBorderColor};
        }

        &--single {
          height: 48px;
        }

        &__rendered {
          line-height: 48px;
          margin-left: 15px;
        }
      }

      &-dropdown {
        box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.1),
          0px 4px 6px rgba(0, 0, 0, 0.06);
        border-radius: 4px;
      }
    }

    .ant-select-focused .ant-select-selection,
    .ant-select-selection:focus,
    .ant-select-selection:active {
      border-color: ${v.inputBorderColor};
      box-shadow: none;
    }

    .ant-select-selection__placeholder,
    .ant-select-search__field__placeholder {
      color: ${c.DarkPrimary};
      opacity: 0.8;
    }

    .ant-select-arrow .ant-select-arrow-icon {
      svg {
        display: none;
      }

      &:after {
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid ${c.DarkPrimary};
        position: absolute;
        right: 0;
        margin-top: 5px;
      }
    }

    .ant-select-search--inline .ant-select-search__field {
      /* margin-top: 4px; */
    }

    .ant-select-selection--multiple > ul > li, .ant-select-selection--multiple .ant-select-selection__rendered > ul > li {
      margin-top: ${v.spacing.xs}px;
      height: 32px;
      line-height: 30px;
    }

    .ant-select-selection--multiple .ant-select-selection__rendered {
      margin-left: 15px;
    }

    .ant-select-selection--multiple .ant-select-selection__choice {
      background: ${c.LightSecondary};
      border-color: ${c.LightSecondary};
      margin-top: ${v.spacing.xs}px;
    }
  }


   /* Dropdown Styles */
  .qselectdropdown.ant-select-dropdown {
    .ant-select-dropdown-menu{
      margin-top: 0;
    }

    .ant-select-dropdown-menu-item {
      padding: 10px 15px;
    }

    .ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled) {
      background-color: #f1f1f1;
    }

    &.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon {
      background: ${c.LightPrimary};
      width: 24px;
      height: 24px;
      border-radius: 24px;
      text-align: center;
      line-height: 29px;
      opacity: 0;
    }

    &.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon, .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon {
      background: ${c.GreenPrimary1};
      color: ${c.LightPrimary};
      opacity: 1;
    }
  }
`;

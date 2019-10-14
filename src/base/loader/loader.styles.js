import { css, keyframes } from 'styled-components';
import * as v from '../../shared/constants/variables';

const dotPulse = keyframes`
  0%,
  80%,
  to {
    transform: scale(0.7);
    opacity: 0;
  }

  40% {
    transform: scale(1);
    opacity: 1;
  }
`;

const circular = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export default css`
  /* ---------------------------------------- */
  /* Dotted */
  /* ---------------------------------------- */

  &.c-loader--dotted {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10px;
  }

  .c-loader__dot {
    margin: 0 1.5px;
    animation: ${dotPulse} 1s infinite ease-in-out;
    border-radius: 50%;
    opacity: 0;
    width: 10px;
    height: 10px;

    &:nth-child(2) {
      animation-delay: 0.16s;
    }

    &:nth-child(3) {
      animation-delay: 0.32s;
    }
  }

  /* Color */
  &.c-loader--dotted {
    &.c-loader--color-gray .c-loader__dot {
      background-color: ${v.gray};
    }

    &.c-loader--color-orange .c-loader__dot {
      background-color: ${v.color.orange};
    }

    &.c-loader--color-blue .c-loader__dot {
      background-color: ${v.color.blue};
    }

    &.c-loader--color-green .c-loader__dot {
      background-color: ${v.color.green};
    }

    &.c-loader--color-red .c-loader__dot {
      background-color: ${v.color.red};
    }

    &.c-loader--color-white .c-loader__dot {
      background-color: ${v.color.white};
    }
  }

  /* Size */

  &.c-loader--dotted {
    &.c-loader--size-sm {
      height: 8px;

      .c-loader__dot {
        width: 8px;
        height: 8px;
      }
    }

    &.c-loader--size-md {
      height: 12px;

      .c-loader__dot {
        width: 12px;
        height: 12px;
      }
    }

    &.c-loader--size-lg {
      height: 14px;

      .c-loader__dot {
        width: 14px;
        height: 14px;
      }
    }
  }

  /* ---------------------------------------- */
  /* Circular */
  /* ---------------------------------------- */

  &.c-loader--circular {
    position: relative;
    width: ${v.loaderCircularWidth}px;
    height: ${v.loaderCircularHeight}px;

    &::before {
      position: absolute;
      content: '';
      box-sizing: border-box;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      border: 2px solid transparent;
      animation: ${circular} ${v.loaderCircularAnimationDuration} linear
        infinite;
      width: ${v.loaderCircularWidth}px;
      height: ${v.loaderCircularHeight}px;
      margin-top: -${v.loaderCircularWidth / 2}px;
      margin-left: -${v.loaderCircularHeight / 2}px;
    }
  }

  /* Color */
  &.c-loader--circular {
    &.c-loader--color-gray::before {
      border-top-color: ${v.gray};
      border-right-color: ${v.gray};
    }

    &.c-loader--color-orange::before {
      border-top-color: ${v.color.orange};
      border-right-color: ${v.color.orange};
    }

    &.c-loader--color-blue::before {
      border-top-color: ${v.color.blue};
      border-right-color: ${v.color.blue};
    }

    &.c-loader--color-green::before {
      border-top-color: ${v.color.green};
      border-right-color: ${v.color.green};
    }

    &.c-loader--color-red::before {
      border-top-color: ${v.color.red};
      border-right-color: ${v.color.red};
    }

    &.c-loader--color-white::before {
      border-top-color: ${v.color.white};
      border-right-color: ${v.color.white};
    }
  }

  /* Size */

  &.c-loader--circular.c-loader--size-sm {
    width: ${v.loaderCircularWidthSm}px;
    height: ${v.loaderCircularHeightSm}px;

    &::before {
      width: ${v.loaderCircularWidthSm}px;
      height: ${v.loaderCircularHeightSm}px;
      margin-top: -${v.loaderCircularWidthSm / 2}px;
      margin-left: -${v.loaderCircularHeightSm / 2}px;
    }
  }

  &.c-loader--circular.c-loader--size-md {
    width: ${v.loaderCircularWidthMd}px;
    height: ${v.loaderCircularHeightMd}px;

    &::before {
      width: ${v.loaderCircularWidthMd}px;
      height: ${v.loaderCircularHeightMd}px;
      margin-top: -${v.loaderCircularWidthMd / 2}px;
      margin-left: -${v.loaderCircularHeightMd / 2}px;
    }
  }

  &.c-loader--circular.c-loader--size-lg {
    width: ${v.loaderCircularWidthLg}px;
    height: ${v.loaderCircularHeightLg}px;

    &::before {
      width: ${v.loaderCircularWidthLg}px;
      height: ${v.loaderCircularHeightLg}px;
      margin-top: -${v.loaderCircularWidthLg / 2}px;
      margin-left: -${v.loaderCircularHeightLg / 2}px;
    }
  }
`;

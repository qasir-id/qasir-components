import { css } from 'styled-components';

export default css`
  .slick-slide {
    > div {
      > div {
        outline: 0;
        position: relative;

        /* &:before {
          content: '';
          width: 100%;
          height: 50%;
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(0, 0, 0, 0.36) 100%
          );
        } */
      }
    }
  }

  .slick-dots {
    position: absolute;
    bottom: 20px;
    text-align: left;
    padding: 0 30px;

    li {
      width: 6px;
      height: 6px;
      background: white;
      border-radius: 6px;
      transition: all 0.2s ease-in-out;

      &.slick-active {
        width: 20px;
      }

      button:before {
        display: none;
      }
    }
  }
`;

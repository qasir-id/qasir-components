import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;

  .anim-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .anim-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .anim-exit {
    opacity: 1;
  }
  .anim-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

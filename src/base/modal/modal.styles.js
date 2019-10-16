import styled from 'styled-components';
import * as v from '../../shared/constants/variables';

export const Container = styled.div`
  .anim-enter {
    opacity: 0;

    .main {
      top: -30px;
    }
  }
  .anim-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 200ms, transform 200ms;

    .main {
      top: 0px;
    }
  }
  .anim-exit {
    opacity: 1;
  }
  .anim-exit-active {
    opacity: 0;
    transition: opacity 400ms, transform 400ms;

    .main {
      top: 0px;
    }
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Dialog = styled.div`
  position: relative;
  width: auto;
  margin: 0.5rem;
  background: ${v.color.white};
  transition: all 300ms, transform 300ms;
  z-index: 10009;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10005;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  transition: opacity 0.2s ease-out;
`;

export const Body = styled.div`
  padding: ${v.spacing.m}px;

  @media screen and (min-width: 767px) {
    padding: ${v.spacing.l}px ${v.spacing.xl}px;
  }
`;

export const Header = styled.div`
  padding: ${v.spacing.m}px;
  background: #f2f4f7;
  position: relative;

  @media screen and (min-width: 767px) {
    padding: ${v.spacing.l}px ${v.spacing.xl}px;
  }
`;

export const HeaderContent = styled.div`
  padding-right: 30px;
`;

export const Close = styled.div`
  cursor: pointer;
  position: absolute;
  right: ${v.spacing.s}px;
  top: ${v.spacing.s}px;
  opacity: 1;
  transition: all 0.2s ease-in-out;

  @media screen and (min-width: 767px) {
    top: ${v.spacing.ml}px;
    right: ${v.spacing.xl}px;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const Footer = styled.div`
  padding: ${v.spacing.m}px;
  position: relative;
  border-top: 1px solid ${v.color.grey};

  @media screen and (min-width: 767px) {
    padding: ${v.spacing.l}px ${v.spacing.xl}px;
  }
`;

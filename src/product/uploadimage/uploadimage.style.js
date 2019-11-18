import styled from 'styled-components';
import * as c from '../../shared/constants/color';
import * as v from '../../shared/constants/variables';

export const Wrapper = styled.div`
  * {
    &:focus {
      outline: 0;
    }
  }

  p {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  text-align: center;
`;

export const Box = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  background: ${c.LightSecondary};
  border-radius: ${v.borderRadiusLg}px;
  text-align: center;
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  outline: 0;
  overflow: hidden;
  margin-bottom: ${v.spacing.m}px;

  .result {
    object-fit: contain;
    width: 100%;
    height: 100%;
    object-position: center;
  }
`;

export const Icon = styled.div`
  margin-right: ${v.spacing.s}px;
  width: 36px;
`;

export const Desc = styled.div`
  p {
    margin: 0;
  }
`;

export const LoaderActive = styled.div`
  position: relative;
  .c-loader {
    position: absolute;
    top: 10%;
    width: 100%;
    bottom: 0;
    margin: auto;
    z-index: 100;
  }

  .imgContainer {
    opacity: 0.2;
  }
`;

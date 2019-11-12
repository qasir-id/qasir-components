import styled from 'styled-components';
import * as c from '../../shared/constants/color';
import * as v from '../../shared/constants/variables';

export const Wrapper = styled.div`
  height: 56px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  flex-direction: row;
  width: 100%;
  z-index: 987;
  top: 0;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
  left: 0;

  &.bg-transparent {
    background-color: transparent;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: calc(100% - 100px);
`;

export const Title = styled.div`
  color: ${c.DarkPrimary};
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  position: relative;
  line-height: 1;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Icon = styled.div`
  width: 20px;
  cursor: pointer;
  margin-right: ${v.spacing.ml}px;
  img,
  svg {
    max-width: 100%;
  }
`;

export const RightContent = styled.div`
  margin-left: ${v.spacing.ml}px;
`;

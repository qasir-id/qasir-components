import styled from 'styled-components';
import * as v from '../../shared/constants/variables';
import * as c from '../../shared/constants/color';

export const Wrapper = styled.div`
  position: relative;
  .ant-steps {
    background: ${c.LightPrimary};
    position: sticky;
    top: 0;
    width: 100%;
    left: 0;
  }
  .ant-steps-item {
    display: none;

    &.ant-steps-item-active {
      display: block;
    }
  }

  .ant-steps-item-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${v.spacing.s}px;
    border-bottom: 1px solid ${c.LightSecondary};
  }

  .ant-steps-item-icon {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background: ${c.RedPrimary};
    color: ${c.LightPrimary};
    text-align: center;
    font-size: ${v.FontSize.small}px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-steps-item-title {
    font-weight: 600;
    margin-left: ${v.spacing.s}px;
    color: ${c.DarkPrimary};
    background: ${c.LightPrimary};
  }
`;

export const Content = styled.div`
  padding: ${v.spacing.s}px;
  background: ${c.LightPrimary};
  min-height: 100vh;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${v.spacing.s}px ${v.spacing.m}px;
  border-top: 5px solid ${c.LightSecondary};
  background: ${c.LightPrimary};
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

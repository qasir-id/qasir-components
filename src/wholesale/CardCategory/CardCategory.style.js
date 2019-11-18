import styled from 'styled-components';
import * as v from '../../shared/constants/variables';
import * as c from '../../shared/constants/color';

export const Wrapper = styled.a`
  display: block;
  text-decoration: none;
  text-align: center;
  .card {
    border-radius: 0;
    height: 180px;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: ${v.spacing.s}px;
  margin-top: -15px;
  margin-left: -15px;
  margin-right: -15px;

  img {
    max-width: 100%;
    object-fit: contain;
    height: 100px;
    width: 100px;
    object-position: center;
  }
  &.empty {
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      background: ${c.DarkPrimary};
      opacity: 0.8;
    }
  }

  .text {
    position: absolute;
    z-index: 1;
  }
`;

export const MetaInfo = styled.div`
  .title {
    margin-bottom: ${v.spacing.m}px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Badge = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  .multiple-word {
    border-radius: 0;
    border-bottom-left-radius: 10px;
  }
`;

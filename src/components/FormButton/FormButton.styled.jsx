import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Button = styled.button`
  width: 280px;
  height: 44px;
  background-color: ${props => props.theme.colors.accent};
  cursor: pointer;
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 40px;
  color: ${props => props.theme.colors.textSecond};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  ${device.tablet} {
    width: 458px;
    font-size: 18px;
    line-height: 1.38;
  }
  ${device.desktop} {
    height: 48px;
  }
`;

import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';
import { ReactComponent as SearchIcon } from 'data/img/search-icon.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
  ${device.tablet} {
    margin-bottom: 40px;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  width: 280px;
  height: 40px;
  padding: 9px 12px;
  border-radius: 20px;
  border: transparent;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  background: ${props => props.theme.colors.textSecond};
  box-shadow: 7px 4px 14px ${props => props.theme.colors.shadow};
  :hover,
  :focus {
    outline: none;
  }
  ${device.tablet} {
    width: 608px;
    height: 44px;
    padding: 8px 20px;
    border-radius: 40px;
    font-size: 20px;
    line-height: 1.35;
  }
`;

export const Icon = styled(SearchIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

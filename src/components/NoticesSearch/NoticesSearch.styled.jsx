import styled from '@emotion/styled';

import { ReactComponent as SearchIcon } from 'data/img/search-icon.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  padding: 9px 12px;
  width: 280px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  border-radius: 20px;
  border: transparent;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  :hover,
  :focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    padding: 8px 20px;
    width: 608px;
    height: 44px;
    font-size: 20px;
    line-height: 1.35;
    border-radius: 40px;
  }
`;

export const Icon = styled(SearchIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

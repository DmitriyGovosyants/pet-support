import styled from '@emotion/styled';

export const Button = styled.button`
  box-sizing: border-box;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: #f59256;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    background-color: #ff6101;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
`;

import styled from '@emotion/styled';

export const Button = styled.button`
  border: 2px solid #f59256;
  padding: 8px 28px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  border-radius: 40px;
  background-color: #fff;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    border-color: #ff6101;
  }
  :disabled {
    background-color: #f59256;
    color: #fff;
  }
`;

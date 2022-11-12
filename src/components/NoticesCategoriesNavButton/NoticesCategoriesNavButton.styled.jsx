import styled from '@emotion/styled';

export const Button = styled.button`
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  padding: 8px 28px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  background-color: ${props => props.theme.colors.textSecond};
  cursor: pointer;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    border-color: ${props => props.theme.colors.hover};
  }
  :disabled {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.textSecond};
  }
`;

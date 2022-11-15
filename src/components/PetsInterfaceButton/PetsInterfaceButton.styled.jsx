import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: inherit;
  color: #111111;
  fill-opacity: 0.6;
  backdrop-filter: blur(2px);
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${device.tablet} {
    width: 44px;
    height: 44px;
    background-color: ${props => props.theme.colors.bgMain};
  }

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
  }
`;

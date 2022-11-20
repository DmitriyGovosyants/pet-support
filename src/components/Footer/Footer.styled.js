import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding-top: 40px;
  padding-bottom: 20px;
  min-height: 30px;
  cursor: pointer;
  /* background-color: ${props => props.theme.colors.accent}; */
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }

  ${device.tablet} {
    min-height: 88px;
    padding-top: 40px;
    padding-bottom: 20px;
  }

  ${device.notDesktop} {
    align-items: center;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  color: ${p => p.theme.colors.textMain};
  
`;

export const TextAccent = styled.span`
  color: ${p => p.theme.colors.hover};
`;
export const Textuary = styled.span`
  color: ${p => p.theme.colors.red};
`;
import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';
import { ReactComponent as PlusIcon } from 'data/img/plus-icon.svg';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props => props.theme.colors.accent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.hover};
  }
`;

export const StyledPlusIcon = styled(PlusIcon)`
  width: 24px;
  height: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;

  ${device.tabletOnly} {
    display: none;
  }
  ${device.desktop} {
    margin-right: 16px;
    gap: 12px;
  }
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
`;

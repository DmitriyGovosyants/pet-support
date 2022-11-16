import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const Btn = styled.button`
  min-width: ${p => p.width === 'small' ? 'none' : '100%'};
  padding: ${p => p.width === 'small' ? '6px 26px' : '6.5px 0px'};

  font-size: ${p => {
    if (p.size === 'small') {
      return '14px';
    }
    if (p.size === 'medium') {
      return '16px';
    }
    return '20px';
  }};
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${p => p.option === 'black' ? p.theme.colors.textMain : p.theme.colors.textSecond};

  background-color: ${p => p.option === 'black' ? 'transparent' : p.theme.colors.accent};
  border-radius: 40px;
  border-width: 2px;
  border-style: solid;
  border-color: ${p => p.option === 'black' ?  p.theme.colors.accent : 'transparent'};
  cursor: pointer;
  
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  ${device.tablet} {
    min-width: ${p => {
      if (p.width === 'small') {
        return 'none';
      }
      if (p.width === 'fixed') {
        return '180px';
      }
      return '100%';
    }};
    padding: ${p => p.width === 'small' ? '8px 26px' : '6.5px 0px'};
    font-size: 20px;
    
  }

  ${device.desktop} {
    padding: ${p => p.width === 'small' ? '8px 26px' : '8.5px 0px'};
  }

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hover};
    border-color: ${p => p.option === 'black' ?  p.theme.colors.hover : 'transparent'};
  }
`
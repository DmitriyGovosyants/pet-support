import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const Btn = styled.button`
  min-width: 100%;
  padding: 6.5px 0px;

  font-size: ${p => p.size === 'small' ? '16px' : '20px'};
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
    min-width: ${p => p.size === 'small' ? '180px' : '100%'};
    font-size: 20px;
  }

  ${device.desktop} {
    padding: 8.5px 0px;
  }

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hover};
    border-color: ${p => p.option === 'black' ?  p.theme.colors.hover : 'transparent'};
  }
`

/* display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: ${p => p.size === 'small' ? '8px' : '14px'};
  color: ${p => p.theme.colors.textMain};
  text-transform: uppercase;
  background-color: ${p => p.isCheck ? p => p.theme.colors.checkColor : p => p.theme.colors.btnBg};
  border-radius: 10px;
  transition: background-color ${p => p.theme.animation.cubicBezierAverageSpeed};
  :hover {
    background-color: ${p => p.isCheck ? p.theme.colors.checkColor : p => p.theme.colors.accentColor};
  } */
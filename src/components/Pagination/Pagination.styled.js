import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const PaginationBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

export const BtnList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
  row-gap: 4px;
  margin-bottom: 8px;
  
  ${device.mobile} {
    column-gap: 8px;
  }
`

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 35px;
  padding: 8px 4px;
  
  font-size: 14px;
  color: ${p => p.theme.colors.textMain};
  background-color: ${p => p.theme.colors.bgSecond};
  border-radius: 5px;
  border: 2px solid ${p => p.theme.colors.accent};
  transition: background-color ${p => p.theme.animation.cubicBezier};

  cursor: pointer;
  
  :disabled {
    background-color: ${p => p.theme.colors.accent};
  }
  ${device.tablet} {
    min-width: 50px;
    padding: 10px 8px;
    font-size: 20px;
  }
  ${device.desktop} {
    :hover:enabled {
      background-color: ${p => p.theme.colors.hover};
    }
  }
`
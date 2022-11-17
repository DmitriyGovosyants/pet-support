import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const HeaderStyled = styled.header`
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;

  ${device.tablet} {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  ${device.notDesktop} {
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavBox = styled.div`
  ${device.notDesktop} {  
    justify-content: flex-start;
    background-color: ${p => p.theme.colors.bgMain};
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    transition: 500ms;
    transform: ${p => p.menu ? 'none' : 'translateX(100%)'};
    z-index: 10;
  }

  ${device.mobileOnly} {
    padding-top: 30px;
  }

  ${device.tablet} {
    top: 83px;
  }
  
  ${device.desktop} {
    display: flex;
    align-items: center;
    margin-left: 80px;
  }
`;

export const AuthBox = styled.div`
  display: none;

  ${device.tablet} {
    display: flex;
    margin-right: 25px;
    margin-left: auto;
  }

  ${device.desktop} {
    margin-right: 0;
  }
`;

export const AuthBoxMob = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;

  ${device.tablet} {
    display: none;
  }
`;
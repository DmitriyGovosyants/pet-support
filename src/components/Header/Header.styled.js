import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const HeaderStyled = styled.header`
  display: flex;
  padding-top: 20px;

  ${device.mobileOnly} {
    padding-top: 12px;
  }

  ${device.notDesktop} {
    position: relative;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavBox = styled.div`
  ${device.notDesktop} {
    justify-content: flex-start;
    background-color: ${p => p.theme.colors.bgMain};
    position: absolute;
    top: 55px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    transition: 1s;
    transform: ${p => p.menu ? 'none' : 'translateY(-200vh)'};
    height: ${p => p.menu ? '200vh' : "100%"};
    z-index: 10;
  }

  ${device.tablet} {
    top: 65px;
  }
  
  ${device.desktop} {
    display: flex;
    align-items: center;
    margin-left: 80px;
    margin-top: 5px;
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
margin-bottom: 60px;
margin-top: 45px;

${device.tablet} {
  display: none;
}
`;
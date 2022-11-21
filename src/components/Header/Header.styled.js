import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const HeaderStyled = styled.header`
  z-index: 3;
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  min-height: 74px;
  color: ${p => p.theme.colors.bg};
  ${device.tablet} {
    min-height: 88px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  ${device.notDesktop} {
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavBox = styled.div`
  z-index: 4;
  ${device.notDesktop} {
    position: fixed;
    top: ${p => p.theme.header.mobileHeight};
    left: 0;
    z-index: 10;

    width: 100vw;
    height: calc(100vh - (${p => p.theme.header.mobileHeight}));

    background-color: ${p => p.theme.colors.bgMain};

    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${p => (p.menu ? 'none' : 'translateX(100%)')};
  }

  ${device.mobileOnly} {
    padding-top: 30px;
  }

  ${device.tabletOnly} {
    top: ${p => p.theme.header.tabletAndDesktopHeight};
    height: calc(100vh - (${p => p.theme.header.tabletAndDesktopHeight}));
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

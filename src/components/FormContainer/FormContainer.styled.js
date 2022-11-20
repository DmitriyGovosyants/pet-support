import styled from '@emotion/styled';
import { device, retina } from 'styles/mediaquery';
import { bgImgs } from '../../data/img/formPage';

export const Container = styled.div`
  height: calc(100vh - (${p => p.theme.header.mobileHeight}));
  background-image: url(${bgImgs.curveMobile1x});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100vw;

  ${retina} {
    background-image: url(${bgImgs.curveMobile2x});
  }

  ${device.tablet} {
    height: calc(100vh - (${p => p.theme.header.tabletAndDesktopHeight}));
    background-image: url(${bgImgs.curveTablet1x});

    ${retina} {
      background-image: url(${bgImgs.curveTablet2x});
    }
  }

  ${device.desktop} {
    background-image: url(${bgImgs.curveDesktop1x});

    ${retina} {
      background-image: url(${bgImgs.curveDesktop2x});
    }
  }
`;

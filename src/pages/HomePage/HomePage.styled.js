import styled from '@emotion/styled';
import { size, device, retina } from 'styles/mediaquery';
import { bgImgs } from '../../data/img/homePage';

export const BackgroundWrapper = styled.div`
  position: relative;
  /* height: calc(100vh - (${p => p.theme.header.mobileHeight})); */
  height: 100vh;
  background-image: url(${bgImgs.curveMobile1x});
  background-position: left 33% bottom -14px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-size: auto; */
  background-size: 620px 470px;

  ${retina} {
    background-image: url(${bgImgs.curveMobile2x});
  }

  ${device.tablet} {
    /* height: calc(100vh - (${p => p.theme.header.tabletAndDesktopHeight})); */

    background-image: url(${bgImgs.curveTablet1x});
    background-position: left 28% bottom -159.48px;
    background-size: 1572.76px 1267.48px;

    ${retina} {
      background-image: url(${bgImgs.curveTablet2x});
    }
  }

  ${device.desktop} {
    /* margin-left: ${p => p.theme.spacing(-4)};
    margin-right: ${p => p.theme.spacing(-4)}; */

    background-image: url(${bgImgs.curveRightDesktop1x}),
      url(${bgImgs.curveLeftDesktop1x}), url(${bgImgs.circleDesktop1x}),
      url(${bgImgs.heartDesktop1x});
    background-position: right bottom, left bottom, left 460px bottom 200px,
      right 500px bottom 510px;
    background-repeat: no-repeat;
    background-size: 511px auto, 1178px auto, 63px 63px, 92px 89px;

    ${retina} {
      background-image: url(${bgImgs.curveRightDesktop2x}),
        url(${bgImgs.curveLeftDesktop2x}), url(${bgImgs.circleDesktop2x}),
        url(${bgImgs.heartDesktop2x});
    }
  }
`;

export const Title = styled.h1`
  /* position: relative;
  z-index: 6; */

  padding-top: 44px;
  margin-bottom: 58px;
  /* padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)}; */

  font-size: 32px;
  font-weight: 700;
  line-height: 1.375;
  text-align: left;
  color: ${p => p.theme.colors.textMain};

  ${device.tablet} {
    max-width: 620px;

    padding-top: 92px;
    padding-left: ${p => p.theme.spacing(8)};
    padding-right: ${p => p.theme.spacing(0)};

    font-size: 68px;
    line-height: 1.47;
  }

  ${device.desktop} {
    max-width: 604px;

    padding-left: ${p => p.theme.spacing(4)};
  }
`;

export const PictureStyled = styled.picture`
  width: 100%;

  /* margin-top: auto; */
  
  /* max-width: 320px; */

  /* position: absolute; */
  /* top: 100%;
  left: 50%;
  transform: translate(-50%, -100%); */

  ${device.tablet} {
    max-width: 699px;
  }

  ${device.desktop} {
    max-width: 624px;

    left: 100%;
    transform: translate(-100%, -100%);
  }
`;

export const PositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 100%; */
  /* height: calc(100vh - (${p => p.theme.header.mobileHeight})); */
  

  ${device.tablet} {

  }
`
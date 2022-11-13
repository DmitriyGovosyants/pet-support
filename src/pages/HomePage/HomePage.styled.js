import styled from '@emotion/styled';
import { size, device } from 'styles/mediaquery';
import { bckgImages, contentImages } from '../../data/img/homePage';

// console.log(bckgImages);

const retina =
  '@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)';

export const Wrapper = styled.div`
  outline: 1px solid green;
  height: 100vh;

  margin-left: ${p => p.theme.spacing(-5)};
  margin-right: ${p => p.theme.spacing(-5)};

  background-image: url(${bckgImages.curveMobile1x});
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: ${size.mobile} auto;

  ${retina} {
    background-image: url(${bckgImages.curveMobile2x});
  }

  ${device.tablet} {
    margin-left: ${p => p.theme.spacing(-8)};
    margin-right: ${p => p.theme.spacing(-8)};

    background-image: url(${bckgImages.curveTablet1x});
    background-size: ${size.tablet} auto;

    ${retina} {
      background-image: url(${bckgImages.curveTablet2x});
    }
  }

  ${device.desktop} {
    margin-left: ${p => p.theme.spacing(-4)};
    margin-right: ${p => p.theme.spacing(-4)};

    background-image: url(${bckgImages.curveRightDesktop1x}),
      url(${bckgImages.curveLeftDesktop1x}), url(${bckgImages.circleDesktop1x}),
      url(${bckgImages.heartDesktop1x});
    background-position: right bottom, left bottom, left 470px bottom 200px,
      right 500px bottom 510px;
    background-repeat: no-repeat;
    background-size: 511px auto, 1178px auto, 63px 63px, 92px 89px;

    ${retina} {
      background-image: url(${bckgImages.curveRightDesktop2x}),
        url(${bckgImages.curveLeftDesktop2x}),
        url(${bckgImages.circleDesktop2x}), url(${bckgImages.heartDesktop2x});
    }
  }
`;

export const Title = styled.h1`
  padding-top: 60px;
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};

  font-size: 32px;
  font-weight: 700;
  line-height: 1.375;
  text-align: left;
  color: ${p => p.theme.colors.textMain};

  outline: 1px solid blue;

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

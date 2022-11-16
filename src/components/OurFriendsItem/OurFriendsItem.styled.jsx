import styled from '@emotion/styled/macro';
import { device } from 'styles/mediaquery';

export const FriendItem = styled.li`
  border-radius: ${p => p.theme.spacing(5)};
  background: ${props => props.theme.colors.bgSecond};
  box-shadow: ${props => props.theme.colors.shadow};
  margin-bottom: ${p => p.theme.spacing(-5)};
  width: ${p => p.theme.spacing(70)};
  min-height: ${p => p.theme.spacing(48)};
  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    scale 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    z-index: 1;
    scale: 1.01;
    box-shadow: ${props => props.theme.colors.hoverShadow};
  }
  ${device.tablet} {
    width: ${p => p.theme.spacing(84)};
    min-height: ${p => p.theme.spacing(61.5)};
    border-radius: ${p => p.theme.spacing(10)};
    margin-bottom: ${p => p.theme.spacing(-1)};
  }
  ${device.desktop} {
    width: ${p => p.theme.spacing(98.75)};
    min-height: ${p => p.theme.spacing(71.75)};
    border-radius: ${p => p.theme.spacing(10)};
  }
`;

export const ItemTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: ${p => p.theme.spacing(3)};
  line-height: ${p => p.theme.spacing(4)};
  text-align: center;
  text-decoration-line: underline;
  color: ${props => props.theme.colors.accent};
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
  ${device.tablet} {
    font-size: ${p => p.theme.spacing(4)};
    line-height: ${p => p.theme.spacing(5.5)};
    padding-top: ${p => p.theme.spacing(4)};
    padding-bottom: ${p => p.theme.spacing(4)};
  }
  ${device.desktop} {
    font-size: ${p => p.theme.spacing(5)};
    line-height: ${p => p.theme.spacing(6.75)};
    padding-top: ${p => p.theme.spacing(4)};
    padding-bottom: ${p => p.theme.spacing(4)};
  }
`;

export const ItemNetwork = styled.div`
  display: flex;
`;

export const ImgItem = styled.img`
  margin-left: ${p => p.theme.spacing(1)};
  margin-right: ${p => p.theme.spacing(3)};
  width: ${p => p.theme.spacing(27.5)};
  height: ${p => p.theme.spacing(19.5)};
  ${device.tablet} {
    width: ${p => p.theme.spacing(30)};
    height: ${p => p.theme.spacing(21.25)};
    margin-right: ${p => p.theme.spacing(3.5)};
  }
  ${device.desktop} {
    width: ${p => p.theme.spacing(39.5)};
    height: ${p => p.theme.spacing(28)};
    margin-right: ${p => p.theme.spacing(4)};
  }
`;

export const InfoItem = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.theme.spacing(3)};
  line-height: ${p => p.theme.spacing(4)};
`;

export const InfoItemUl = styled.ul`
  margin-bottom: -4px;
  width: ${p => p.theme.spacing(30)};
`;

export const InfoItemLi = styled.button`
  text-align: start;
  margin-bottom: ${p => p.theme.spacing(1)};
  width: ${p => p.theme.spacing(37.5)};
  font-weight: 500;
  font-size: ${p => p.theme.spacing(3)};
  line-height: ${p => p.theme.spacing(4)};
  align-items: center;
  color: ${props => props.theme.colors.textMain};
  ${device.tablet} {
    font-size: ${p => p.theme.spacing(3.5)};
    line-height: ${p => p.theme.spacing(5)};
    margin-bottom: ${p => p.theme.spacing(2)};
  }
  ${device.desktop} {
    font-size: ${p => p.theme.spacing(4)};
    line-height: ${p => p.theme.spacing(5.5)};
    margin-bottom: ${p => p.theme.spacing(3)};
  }
`;

export const InfoItemTime = styled.button`
  text-align: start;
  padding-left: 0;
  border: none;
  background: none;
  margin-bottom: ${p => p.theme.spacing(1)};
  ${device.tablet} {
  }
`;

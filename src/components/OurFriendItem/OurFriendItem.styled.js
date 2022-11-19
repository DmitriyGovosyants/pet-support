import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Card = styled.li`
  padding: 12px 4px;

  background-color: ${p => p.theme.colors.bgSecond};
  border-radius: ${props => props.theme.spacing(5)};
  box-shadow: ${props => props.theme.shadows.shadow};

  transition: box-shadow color
    ${props => props.theme.animation.cubicBezierSlowSpeed};

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.mainShadow};
  }

  ${device.tablet} {
    padding: 16px 16px 16px 4px;
    border-radius: ${props => props.theme.spacing(10)};
  }
`;

export const FriendTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing(3)};

  font-size: ${props => props.theme.spacing(3)};
  font-weight: 700;
  line-height: 1.33;
  text-align: center;
  text-decoration-line: underline;
  color: ${p => p.theme.colors.accent};

  transition: color ${props => props.theme.animation.cubicBezierSlowSpeed};

  :hover,
  :focus {
    color: ${p => p.theme.colors.hover};
  }

  ${device.tablet} {
    min-height: ${props => props.theme.spacing(11)};
    margin-bottom: ${props => props.theme.spacing(4)};

    font-size: ${props => props.theme.spacing(4)};
    line-height: 1.375;
  }

  ${device.desktop} {
    min-height: ${props => props.theme.spacing(13.5)};

    font-size: ${props => props.theme.spacing(5)};
    line-height: 1.35;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
`;

export const ImgWrapper = styled.div`
  flex: 0 0 ${props => props.theme.spacing(27.5)};

  ${device.tablet} {
    flex: 0 0 ${props => props.theme.spacing(30)};
  }

  ${device.desktop} {
    flex: 0 0 ${props => props.theme.spacing(39.5)};
  }
`;

export const InfoList = styled.ul`
  margin-left: ${props => props.theme.spacing(3)};

  ${device.tablet} {
    margin-left: ${props => props.theme.spacing(3.5)};
  }

  ${device.desktop} {
    margin-left: ${props => props.theme.spacing(4)};
  }
`;

export const InfoItem = styled.li`
  position: relative;
  font-size: ${props => props.theme.spacing(3)};
  line-height: 1.33;
  color: ${p => p.theme.colors.black};

  :not(:last-of-type) {
    margin-bottom: ${props => props.theme.spacing(1)};
  }

  ${device.tablet} {
    font-size: ${props => props.theme.spacing(3.5)};
    line-height: 1.35;

    :not(:last-of-type) {
      margin-bottom: ${props => props.theme.spacing(2)};
    }
  }

  ${device.desktop} {
    font-size: ${props => props.theme.spacing(4)};
    line-height: 1.375;

    :not(:last-of-type) {
      margin-bottom: ${props => props.theme.spacing(3)};
    }
  }
`;

export const AddressLink = styled.a`
  text-decoration: ${p => (p.underline ? 'underline' : 'none')};

  transition: color ${props => props.theme.animation.cubicBezierSlowSpeed};

  :hover,
  :focus {
    color: ${p => p.theme.colors.hover};
  }
`;

export const TimeBtn = styled.button`
  text-align: start;
  cursor: ${p => (p.disabled ? 'default' : 'pointer')};

  transition: color ${props => props.theme.animation.cubicBezierSlowSpeed};

  :hover,
  :focus {
    color: ${p => (p.disabled ? 'inherit' : p => p.theme.colors.accent)};
  }
`;

export const TimeDetails = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  transform: translateY(${props => props.theme.spacing(1)});

  display: grid;
  row-gap: ${props => props.theme.spacing(1)};
  padding: ${props => props.theme.spacing(3)};

  font-size: ${props => props.theme.spacing(3)};
  line-height: 1.33;

  background: ${p => p.theme.colors.bgSecond};
  border: 1px solid ${p => p.theme.colors.accent};
  box-shadow: ${props => props.shadows.shadowWorkDays};
  border-radius: ${props => props.theme.spacing(2)};

  ${device.tablet} {
    transform: translateY(${props => props.theme.spacing(2)});
  }

  ${device.desktop} {
    transform: translateY(${props => props.theme.spacing(3)});
  }
`;

export const TimeDetailsItem = styled.li`
  display: grid;
  grid-template-columns: 20px 100px;
  column-gap: ${props => props.theme.spacing(3)};
`;

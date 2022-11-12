import styled from '@emotion/styled/macro';
import { ReactComponent as FavouriteIcon } from 'data/img/favourite-icon.svg';
import { ReactComponent as ToFavouriteIcon } from 'data/img/to-favourite-icon.svg';

export const ImgWrapper = styled.div`
  position: relative;
`;

export const StyledFavouriteIcon = styled(FavouriteIcon)`
  scale: 1;
  stroke: ${props => props.theme.colors.accent};
  fill: ${props => props.theme.colors.accent};
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledToFavouriteIcon = styled(ToFavouriteIcon)`
  scale: 1;
  stroke: ${props => props.theme.colors.accent};
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Button = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.btnTransperent};
  cursor: pointer;
  :hover,
  :focus {
    & ${StyledFavouriteIcon} {
      scale: 1.05;
      stroke: ${props => props.theme.colors.hover};
      fill: ${props => props.theme.colors.hover};
    }
    & ${StyledToFavouriteIcon} {
      scale: 1.05;
      stroke: ${props => props.theme.colors.hover};
    }
  }
`;

export const Category = styled.span`
  position: absolute;
  top: 20px;
  padding: 6px 0 6px 20px;
  width: 158px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  background-color: ${props => props.theme.colors.btnTransperent};
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
`;

export const Description = styled.div`
  display: grid;
  grid-template-columns: 87px 161px;
  gap: 8px;
  margin-bottom: 50px;
`;

export const About = styled.div`
  padding: 20px 20px 32px 20px;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
`;

export const LearnMore = styled.button`
  width: 248px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.accent};
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    border-color: ${props => props.theme.colors.hover};
    color: ${props => props.theme.colors.hover};
  }
`;

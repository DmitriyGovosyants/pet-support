import { useLocation } from 'react-router-dom';
import { Container } from 'components';
import {
  FooterStyled,
  Text,
  TextAccent,
  StyledFavouriteIcon,
} from './Footer.styled';

export const Footer = () => {
  const { pathname } = useLocation();

  return (
    pathname !== '/' && (
      <FooterStyled>
        <Container>
          <Text>
            ©2022 - Pe<TextAccent>t</TextAccent>ly. All Rights Reserved.
          </Text>
          <Text>
            Developed with <StyledFavouriteIcon /> by GoIT Students.
          </Text>
        </Container>
      </FooterStyled>
    )
  );
};

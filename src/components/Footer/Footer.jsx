import { useLocation } from 'react-router-dom';
import { routesPath } from 'router';
import { Container } from 'components';
import {
  FooterStyled,
  Text,
  TextAccent,
  StyledFavouriteIcon,
} from './Footer.styled';
import { useState } from 'react';
import { useEffect } from 'react';

export const Footer = () => {
  const [isShow, setIsShow] = useState(true);
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    if (
      pathname === '/' ||
      pathname === `/${routesPath.login}` ||
      pathname === `/${routesPath.register}`
    ) {
      setIsShow(false);
      return;
    }
    setIsShow(true);
  }, [pathname]);

  return (
    isShow && (
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

import { useState, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Logo, Nav, UserNav, AuthNav, BurgerBtn } from 'components';
import { HeaderStyled, NavBox, AuthBox, AuthBoxMob } from './Header.styled';

const body = document.getElementsByTagName('body')[0];

export const Header = () => {
  const user = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      disableBodyScroll(body);
    }
    if (!isMenuOpen) {
      enableBodyScroll(body);
    }
  }, [isMenuOpen]);

  window.addEventListener('resize', () => setIsMenuOpen(false));

  const showNavBar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderStyled>
      <Logo />
      <NavBox menu={isMenuOpen}>
        <AuthBoxMob>
          {user ? (
            <UserNav toggleNavBar={showNavBar} />
          ) : (
            <AuthNav toggleNavBar={showNavBar} />
          )}
        </AuthBoxMob>
        <Nav toggleNavBar={showNavBar} />
      </NavBox>
      {!isMenuOpen && <AuthBox>{user ? <UserNav /> : <AuthNav />}</AuthBox>}
      <BurgerBtn toggleNavBar={showNavBar} />
    </HeaderStyled>
  );
};

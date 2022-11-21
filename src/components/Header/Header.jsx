import { useState, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useAuth } from 'redux/useAuth';
import { Logo, Nav, UserNav, AuthNav, BurgerBtn } from 'components';
import { HeaderStyled, NavBox, AuthBox, AuthBoxMob } from './Header.styled';

const body = document.getElementsByTagName('body')[0];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (isMenuOpen) {
      disableBodyScroll(body);
    }
    if (!isMenuOpen) {
      enableBodyScroll(body);
    }
  }, [isMenuOpen]);

  window.addEventListener('resize', () => setIsMenuOpen(false));

  return (
    <HeaderStyled>
      <Logo />
      <NavBox menu={isMenuOpen}>
        <AuthBoxMob>
          {user ? (
            <UserNav toggleNavBar={() => setIsMenuOpen(false)} />
          ) : (
            <AuthNav toggleNavBar={() => setIsMenuOpen(false)} />
          )}
        </AuthBoxMob>
        <Nav toggleNavBar={() => setIsMenuOpen(false)} />
      </NavBox>
      {!isMenuOpen && <AuthBox>{user ? <UserNav /> : <AuthNav />}</AuthBox>}
      <BurgerBtn toggleNavBar={() => setIsMenuOpen(!isMenuOpen)} />
    </HeaderStyled>
  );
};

import { useState, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useAuth } from 'redux/useAuth';
import { Logo, Nav, UserNav, AuthNav } from 'components';
import {
  HeaderStyled,
  NavBox,
  AuthBox,
  AuthBoxMob,
  BurgerBtn,
} from './Header.styled';

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
      <BurgerBtn onClick={() => setIsMenuOpen(!isMenuOpen)} type="button">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_201_1503)">
            <path
              d="M5 30H35V26.6667H5V30ZM5 21.6667H35V18.3333H5V21.6667ZM5 10V13.3333H35V10H5Z"
              fill="#212121"
            />
          </g>
        </svg>
      </BurgerBtn>
    </HeaderStyled>
  );
};

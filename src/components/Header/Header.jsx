import { Logo, Nav, UserNav, AuthNav } from 'components';
import { HeaderStyled, NavBox, AuthBox, AuthBoxMob } from './Header.styled';
import { useState } from 'react';
import { BurgerBtn } from 'components/BurgerBtn/BurgerBtn';

export const Header = () => {
  const user = false; 
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const showNavBar = () => {
    setIsMenuOpen(s => !s);
  };

  return (
    <HeaderStyled>
      <Logo />
      <NavBox menu={isMenuOpen}>
        <AuthBoxMob>
          {user ? <UserNav /> : <AuthNav />}
        </AuthBoxMob>
        <Nav />
      </NavBox>
      <AuthBox>
        {user ? <UserNav /> : <AuthNav />}
      </AuthBox>
      <BurgerBtn toggleNavBar={showNavBar} />
    </HeaderStyled>
  );
};
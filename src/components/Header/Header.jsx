import { Logo, Nav, UserNav, AuthNav } from 'components';
import { HeaderStyled, NavBox, AuthBox, AuthBoxMob } from './Header.styled';
import { useState } from 'react';
import { BurgerBtn } from 'components/BurgerBtn/BurgerBtn';

export const Header = () => {
  const user = false; 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showNavBar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderStyled>
      <Logo />
      <NavBox menu={isMenuOpen}>
        <AuthBoxMob toggleNavBar={showNavBar}>
          {user ? <UserNav /> : <AuthNav />}
        </AuthBoxMob>
        <Nav toggleNavBar={showNavBar}/>
      </NavBox>
      <AuthBox toggleNavBar={showNavBar}>
        {user ? <UserNav /> : <AuthNav />}
      </AuthBox>
      <BurgerBtn toggleNavBar={showNavBar} />
    </HeaderStyled>
  );
};
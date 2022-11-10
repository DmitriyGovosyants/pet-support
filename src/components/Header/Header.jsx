import { Logo, Nav, UserNav, AuthNav } from 'components';

export const Header = () => {
  const isLoggedIn = false; //временная заглушка

  return (
    <>
      <Logo />
      <Nav />
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </>
  );
};

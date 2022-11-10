import { Logo, Nav, UserNav, AuthNav } from 'components';

export const Header = () => {
  const user = false; //временная заглушка

  return (
    <>
      <Logo />
      <Nav />
      {user ? <UserNav /> : <AuthNav />}
    </>
  );
};

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Button } from 'components';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <Container>
          <Suspense fallback={<div>...Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <div>LOGIN</div>
      <Button type={'submit'}>Login</Button>
      <div>REGISTRATION</div>
      <Button>Next</Button>
      <Button type={'submit'}>Register</Button>
      <Button option={'black'}>Back</Button>
      {/* <Footer /> */}
    </>
  );
};

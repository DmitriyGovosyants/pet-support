import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from 'components';

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
      {/* <Footer /> */}
    </>
  );
};

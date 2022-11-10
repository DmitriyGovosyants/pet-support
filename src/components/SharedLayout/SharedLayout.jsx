import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components';
// import { Header } from 'components';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        !!!HEADER!!!
        {/* <Header /> */}
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

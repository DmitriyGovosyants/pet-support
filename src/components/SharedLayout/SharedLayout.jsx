import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, MainButton } from 'components';

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
      <MainButton type={'submit'}>Login</MainButton>
      <div>REGISTRATION</div>
      <MainButton>Next</MainButton>
      <MainButton type={'submit'}>Register</MainButton>
      <MainButton option={'black'}>Back</MainButton>
      <div>ADD USER PET MODAL</div>
      <MainButton option={'black'} size={'small'}>
        Cancel
      </MainButton>
      <MainButton size={'small'}>Next</MainButton>
      <MainButton option={'black'} size={'small'}>
        Back
      </MainButton>
      <MainButton type={'submit'} size={'small'}>
        Done
      </MainButton>
      {/* 40 44 44 */}
      {/* 44 44 48 были */}
      {/* 100% 180px 180px */}
      {/* <Footer /> */}
    </>
  );
};

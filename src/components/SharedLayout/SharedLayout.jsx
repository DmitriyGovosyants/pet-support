import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, MainButton, Spinner } from 'components';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <Container>
          <Suspense fallback={<Spinner />}>
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
      <div>MODAL</div>
      <MainButton option={'black'} size={'medium'} width={'fixed'}>
        Cancel
      </MainButton>
      <MainButton size={'medium'} width={'fixed'}>
        Next
      </MainButton>
      <MainButton option={'black'} size={'medium'} width={'fixed'}>
        Back
      </MainButton>
      <MainButton type={'submit'} size={'medium'} width={'fixed'}>
        Done
      </MainButton>
      <div>FindPetNav and ModalAddNoticeSelect</div>
      <MainButton
        onClick={() => console.log('yes')}
        option={'black'}
        size={'small'}
        width={'small'}
        disabled={false}
      >
        sell
      </MainButton>
    </>
  );
};

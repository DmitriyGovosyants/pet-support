import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Spinner } from 'components';
import { useSelector } from 'react-redux';
import { isRefreshing as refresh } from 'redux/authSlice';

export const SharedLayout = () => {
  const isRefreshing = useSelector(refresh);

  return (
    !isRefreshing && (
      <>
        <Container>
          <Header />
        </Container>
        <main>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </main>
      </>
    )
  );
};

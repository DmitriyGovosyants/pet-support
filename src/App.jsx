import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components';
import { routesPath, PrivateRoute, PublicRoute } from 'router';

const Home = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */)
);
const Register = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName: "register-page" */)
);
const Login = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName: "login-page" */)
);
const News = lazy(() =>
  import('pages/NewsPage' /* webpackChunkName: "news-page" */)
);
const Notices = lazy(() =>
  import('pages/NoticesPage' /* webpackChunkName: "notices-page" */)
);
const Friends = lazy(() =>
  import('pages/OurFriendsPage' /* webpackChunkName: "friends-page" */)
);
const User = lazy(() =>
  import('pages/UserPage' /* webpackChunkName: "user-page" */)
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route element={<PublicRoute />}>
          <Route index element={<Home />} />
        </Route>

        <Route path={routesPath.news} element={<News />} />
        <Route path={routesPath.notices} element={<Notices />} />
        <Route path={routesPath.friends} element={<Friends />} />

        <Route element={<PrivateRoute redirectTo={routesPath.login} />}>
          <Route path={routesPath.user} element={<User />} />
          <Route path="*" element={<Navigate to="/user" replace />} />
        </Route>

        <Route
          element={<PublicRoute restricted redirectTo={routesPath.user} />}
        >
          <Route path={routesPath.login} element={<Login />} />
          <Route path={routesPath.register} element={<Register />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

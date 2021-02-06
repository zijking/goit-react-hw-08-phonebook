import { Switch, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense } from 'react';
import PrivetRoute from './components/PrivateRoute';
import PublicRout from './components/PublicRoute';

import operationUser from './components/redux/users/user-operations';

import AppBar from './components//AppBar';
import ContactsView from './views/ContactsView';
import Container from './components/Container';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegistrationView from './views/RegistrationView';
import PublicRoute from './components/PublicRoute';

function App() {
  // const { pathname } = useLocation();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operationUser.getCurrentUser());
    return () => {};
  }, [dispatch]);

  // console.log('location:', pathname);
  // console.log('url: ', url);

  return (
    <Container>
      <AppBar />

      <Switch>
        {/* <Route exact path={`${url}`} component={HomeView} /> */}
        {/* <Route path={`${url}contacts`} component={ContactsView} /> */}
        {/* <Route path={`${url}login`} component={LoginView} /> */}
        {/* <Route path={`${url}Registration`} component={RegistrationView} /> */}

        <Suspense fallback={<p>Loading...</p>}>
          <PublicRoute exact path={`${url}`}>
            <HomeView />
          </PublicRoute>

          <PublicRoute path={`${url}Registration`} restricted>
            <RegistrationView />
          </PublicRoute>

          <PublicRout path={`${url}login`} restricted>
            <LoginView />
          </PublicRout>

          <PrivetRoute path={`${url}contacts`}>
            <ContactsView />
          </PrivetRoute>
        </Suspense>
      </Switch>
    </Container>
  );
}

export default App;

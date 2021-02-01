import { Switch, Route, useRouteMatch } from 'react-router-dom';

import AppBar from './components//AppBar';
import ContactsView from './views/ContactsView';
import Container from './components/Container';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegistrationView from './views/RegistrationView';

function App() {
  // const { pathname } = useLocation();
  const { url } = useRouteMatch();

  // console.log('location:', pathname);
  // console.log('url: ', url);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path={`${url}`} component={HomeView} />
        <Route path={`${url}contacts`} component={ContactsView} />
        <Route path={`${url}login`} component={LoginView} />
        <Route path={`${url}Registration`} component={RegistrationView} />
      </Switch>
    </Container>
  );
}

export default App;

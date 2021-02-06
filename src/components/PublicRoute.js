import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from './redux/users/user-selectors';

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contacts',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

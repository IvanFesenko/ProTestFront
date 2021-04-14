import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuth } from 'redux/auth/authSelectors';

export default function PublicRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsAuth);

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}

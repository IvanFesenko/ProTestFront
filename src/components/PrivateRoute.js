import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuth } from 'redux/auth/authSelectors';

export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsAuth);
  const location = useLocation();

  return (
    <Route {...routeProps}>
      {isLoggedIn ? (
        children
      ) : (
        <Redirect
          to={{ pathname: `${redirectTo}`, state: { from: location } }}
        />
      )}
    </Route>
  );
}

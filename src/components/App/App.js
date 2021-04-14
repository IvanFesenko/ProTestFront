import React from 'react';
import { Suspense, useEffect } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  Header,
  Footer,
  Main,
  Home,
  Questions,
  PersonalSettings,
  LoaderComponent,
  GoogleRedirect,
} from 'components';
import { AuthPage, ContactsPage, MaterialsPage, ResultsPage } from 'views';
import { getToken } from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const token = useSelector(getToken);

  useEffect(() => {
    if (!token) return;
    dispatch(authOperations.getCurrentUser());
  }, [dispatch, token]);

  return (
    <>
      <Header />

      <Main>
        <Suspense fallback={<LoaderComponent />}>
          <Switch>
            <PrivateRoute exact path="/" redirectTo="/auth">
              <Home />
            </PrivateRoute>

            <PublicRoute
              path="/auth"
              restricted
              redirectTo={location?.state?.from ?? '/'}
            >
              <AuthPage auth={true} />
            </PublicRoute>

            <PublicRoute path="/register" restricted redirectTo="/">
              <AuthPage auth={false} />
            </PublicRoute>

            <PublicRoute path="/google-redirect" restricted redirectTo="/">
              <GoogleRedirect />
            </PublicRoute>

            <PublicRoute path="/contacts">
              <ContactsPage />
            </PublicRoute>

            <PrivateRoute path="/test" redirectTo="/auth">
              <Questions />
            </PrivateRoute>

            <PrivateRoute path="/materials" redirectTo="/auth">
              <MaterialsPage />
            </PrivateRoute>

            <PrivateRoute path="/results" redirectTo="/auth">
              <ResultsPage />
            </PrivateRoute>

            <PrivateRoute path="/profile" redirectTo="/auth">
              <PersonalSettings />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Main>
      <Footer />
    </>
  );
}

export default App;

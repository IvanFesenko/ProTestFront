import { Suspense, useEffect, lazy } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  Header,
  Footer,
  Main,
  Home,
  Questions,
  LoaderComponent,
} from 'components';
import { AuthPage, ContactsPage, UseFulPage } from 'views';
import { getQuestionsName } from 'redux/questions/questionsSelector';
import authOperations from 'redux/auth/authOperations';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

function App() {
  const typeTest = useSelector(getQuestionsName);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

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

            <PublicRoute path="/contacts">
              <ContactsPage />
            </PublicRoute>

            <PrivateRoute path="/test" redirectTo="/auth">
              {typeTest && <Questions />}
            </PrivateRoute>

            <PrivateRoute path="/useful-info" redirectTo="/auth">
              <UseFulPage />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Main>
      <Footer />
    </>
  );
}

export default App;

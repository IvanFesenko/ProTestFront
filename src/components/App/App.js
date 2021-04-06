import React, { lazy, Suspense, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Header, Footer, Main, Home } from 'components';
import { AuthPage } from 'views';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(
      dispatch(
        authOperations.logIn({
          email: 'test@bk.com',
          password: '123456',
        }),
      ),
    );
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/auth">
          <AuthPage auth={true} />
        </Route>
        <Route path="/register">
          <AuthPage auth={false} />
        </Route>
      </Main>
      <Footer />
    </>
  );
}

export default App;

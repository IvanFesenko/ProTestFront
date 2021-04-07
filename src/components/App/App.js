import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Header, Footer, Main, Home, Questions } from 'components';
import { AuthPage } from 'views';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Questions />
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

import React from 'react'; //, { lazy, Suspense }
import { Route } from 'react-router-dom';
import { Header, Footer, Main, Home, Questions } from 'components';
import { AuthPage, ContactsPage, UseFulPage, ResultsPage } from 'views';

function App() {
  return (
    <>
      <Header />
      <Main>
        {/* <Questions /> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/auth">
          <AuthPage auth={true} />
        </Route>
        <Route path="/register">
          <AuthPage auth={false} />
        </Route>

        <Route path="/contacts">
          <ContactsPage />
        </Route>
        <Route path="/test">
          <Questions />
        </Route>
        <Route path="/useful-info">
          <UseFulPage />
        </Route>
        <Route path="/results">
          <ResultsPage />
        </Route>
      </Main>
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import { Header, Footer, Main, Home, Questions } from 'components';
import { AuthPage, ContactsPage, UseFulPage } from 'views';
import { useSelector } from 'react-redux';
import { getQuestionsName } from 'redux/questions/questionsSelector';

function App() {
  const typeTest = useSelector(getQuestionsName);

  return (
    <>
      <Header />
      <Main>
        {typeTest && <Questions />}
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
        <Route path="/useful-info">
          <UseFulPage />
        </Route>

      </Main>
      <Footer />
    </>
  );
}

export default App;

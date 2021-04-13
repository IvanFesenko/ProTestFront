import React from 'react';
import { Route } from 'react-router-dom';
import {
  Header,
  Footer,
  Main,
  Home,
  Questions,
  PersonalSettings,
} from 'components';
import { AuthPage, ContactsPage, MaterialsPage, ResultsPage } from 'views';
import { useSelector } from 'react-redux';
import { getQuestionsName } from 'redux/questions/questionsSelector';

function App() {
  const typeTest = useSelector(getQuestionsName);

  return (
    <>
      <Header />

      <Main>
        {/* {typeTest && <Questions />} */}
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
        <Route path="/materials">
          <MaterialsPage />
        </Route>
        <Route path="/results">
          <ResultsPage />
        </Route>

        <Route path="/profile">
          <PersonalSettings />
        </Route>
      </Main>
      <Footer />
    </>
  );
}

export default App;

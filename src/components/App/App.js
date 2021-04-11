import React from 'react';
import { Route } from 'react-router-dom';
import { Header, Footer, Main, Home, Questions } from 'components';
import { AuthPage, ContactsPage, UseFulPage } from 'views';
import ResultsChartPie from 'components/ResultsChartPie';
import { useSelector } from 'react-redux';
import { getQuestionsName } from 'redux/questions/questionsSelector';

const data = [
  { label: 'Correct ', value: 67, color: '#FF6B01' },
  { label: 'Incorrect  ', value: 20, color: '#D7D7D7' },
];

function App() {
  const typeTest = useSelector(getQuestionsName);

  return (
    <>
      <Header />
      <Main>
        <ResultsChartPie dataPoints={data} />
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

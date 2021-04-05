import { Route } from 'react-router-dom';
import { Header, Footer, Main, Home, Questions  } from 'components';
import { AuthPage } from 'views';

function App() {
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
          <Questions />
      </Main>
      <Footer />
    </>
  );
}

export default App;

import { Route } from 'react-router-dom';
import { Header, Footer, Main, Home } from 'components';
import { AuthPage } from 'views';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route path="/home">
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

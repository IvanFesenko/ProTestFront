import { Route } from 'react-router-dom';
import { Header, Footer, Main } from 'components';
import { AuthPage } from 'views';

function App() {
  return (
    <>
      <Header />
      <Main>
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

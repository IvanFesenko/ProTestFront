import { Route } from 'react-router-dom';
import { Header, Footer, Main, Home } from 'components';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route path="/">
          <Home />
        </Route>
      </Main>
      <Footer />
    </>
  );
}

export default App;

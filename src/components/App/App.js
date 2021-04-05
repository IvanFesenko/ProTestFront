import { Route } from 'react-router-dom';
import { Header, Footer, Main, Home } from 'components';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route path="/home">
          <Home />
        </Route>
      </Main>
      <Footer />
    </>
  );
}

export default App;

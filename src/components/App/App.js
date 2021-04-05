
import { Route } from 'react-router-dom';
import { Header, Footer, Main, Home } from 'components';
import { AuthPage, ContactsPage } from 'views';


function App() {
  return (
    <>
      <Header />
      <Main>
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
      </Main>
      <Footer />
    </>
  );
}

export default App;

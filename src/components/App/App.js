import { Header, Footer, Main } from 'components';
import ContactsPage from './../../views/ContactsPage'

function App() {
  return (
    <>
      <Header />
      <Main>
        <ContactsPage/>
      </Main>
      <Footer />
    </>
  );
}

export default App;

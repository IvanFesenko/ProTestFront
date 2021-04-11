import { ContactCard, SectionTitle } from 'components';
import { List } from './ContactsPage.style';

import contacts from './data';

const ContactsPage = () => {
  return (
    <>
      <SectionTitle>Our team</SectionTitle>
      <List>
        {contacts.map((contact, k) => (
          <ContactCard key={k} {...contact} />
        ))}
      </List>
    </>
  );
};

export default ContactsPage;

import { ContactCard, SectionTitle } from 'components';
import { List, ContactsPageWrap } from './ContactsPage.style';

import contacts from './data';

const ContactsPage = () => {
  return (
    <ContactsPageWrap>
      <SectionTitle>Our team</SectionTitle>
      <List>
        {contacts.map((contact, k) => (
          <ContactCard key={k} {...contact} />
        ))}
      </List>
    </ContactsPageWrap>
  );
};

export default ContactsPage;

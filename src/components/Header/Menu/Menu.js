import { isMobileDevice } from 'services/utils';

import { MobileMenu } from './MobileMenu';
import Navigation, { List, Item, Link } from './Menu.style';

const MENU_LINKS = [
  { name: 'Home', value: <Link to={'/'}>Home</Link> },
  { name: 'Materials', value: <Link to={'/materials'}>Materials</Link> },
  { name: 'Contacts', value: <Link to={'/contacts'}>Contacts</Link> },
];

const Menu = () => {
  return (
    <Navigation>
      {!isMobileDevice ? (
        <List>
          {MENU_LINKS.map(link => (
            <Item key={link.name}>{link.value}</Item>
          ))}
        </List>
      ) : (
        <MobileMenu list={MENU_LINKS} />
      )}
    </Navigation>
  );
};

export default Menu;

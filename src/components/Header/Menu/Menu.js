import { isMobileDevice } from 'services/utils';
import UserInfo from 'components/UserInfo';
import { MobileMenu } from './MobileMenu';
import Navigation, { List, Item, Link } from './Menu.style';

const MENU_LINKS = [
  { name: 'Home', value: <Link to={'/'}>Home</Link> },
  { name: 'Materials', value: <Link to={'/useful-info'}>Materials</Link> },
  { name: 'Contacts', value: <Link to={'/contacts'}>Contacts</Link> },
];

const userInfo = {
  name: 'Name Nick',
  avatar:
    'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png',
};

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

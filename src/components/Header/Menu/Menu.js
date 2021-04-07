import UserInfo from 'components/UserInfo';
import Navigation, { List, Item, Link } from './Menu.style';

const MENU_LINKS = [
  { name: 'Home', value: '/' },
  { name: 'Materials', value: '/materials' },
  { name: 'Contacts', value: '/contacts' },
];

const Menu = () => {
  return (
    <Navigation>
      <List>
        {MENU_LINKS.map(link => (
          <Item key={link.name}>
            <Link to={link.value}>{link.name}</Link>
          </Item>
        ))}
        <UserInfo/>
      </List>
    </Navigation>
  );
};
export default Menu;

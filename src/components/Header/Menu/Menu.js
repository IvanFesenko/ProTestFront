import UserInfo from 'components/UserInfo';
import Navigation, { List, Item, Link } from './Menu.style';
import avatar from './../../../assets/images/avatar.png'

const MENU_LINKS = [
  { name: 'Home', value: '/' },
  { name: 'Materials', value: '/materials' },
  { name: 'Contacts', value: '/contacts' },
];

const userInfo = {
  name:'Name Nick',
  avatar:avatar
}

const Menu = () => {
  return (
    <Navigation>
      <List>
        {MENU_LINKS.map(link => (
          <Item key={link.name}>
            <Link to={link.value}>{link.name}</Link>
          </Item>
        ))}
        <UserInfo {...userInfo} />
      </List>
    </Navigation>
  );
};
export default Menu;

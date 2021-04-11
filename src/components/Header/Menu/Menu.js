import UserInfo from 'components/UserInfo';
import Navigation, { List, Item, Link } from './Menu.style';

const MENU_LINKS = [
  { name: 'Home', value: '/' },
  { name: 'Materials', value: '/materials' },
  { name: 'Contacts', value: '/contacts' },
];

const userInfo = {
  name:'Name Nick',
  avatar:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png'
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
        <UserInfo name={userInfo.name} avatar={userInfo.avatar} />
      </List>
    </Navigation>
  );
};
export default Menu;

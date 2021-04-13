import { isMobileDevice } from 'services/utils';
import { UserInfo, LogoutButton } from 'components';
import { MobileMenu } from './MobileMenu';
import Navigation, { List, Item, Link } from './Menu.style';
import avatar from 'assets/images/avatar.png';

const MENU_LINKS = [
  { name: 'Home', value: <Link to={'/'}>Home</Link> },
  { name: 'Materials', value: <Link to={'/useful-info'}>Materials</Link> },
  { name: 'Contacts', value: <Link to={'/contacts'}>Contacts</Link> },
];

const userInfo = {
  name: 'Username',
  avatar: avatar,
};

const Menu = () => {
  return (
    <Navigation>
      {!isMobileDevice ? (
        <>
          <List>
            {MENU_LINKS.map(link => (
              <Item key={link.name}>{link.value}</Item>
            ))}
          </List>
          <UserInfo {...userInfo} />
          <LogoutButton />
        </>
      ) : (
        <>
          <UserInfo {...userInfo} />
          <MobileMenu
            list={[
              ...MENU_LINKS,
              {
                name: '',
                value: <LogoutButton />,
              },
            ]}
          />
        </>
      )}
    </Navigation>
  );
};

export default Menu;

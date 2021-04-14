import { isMobileDevice } from 'services/utils';
import { UserInfo, LogoutButton } from 'components';
import { useMenu } from 'hooks';
import { MobileMenu } from './MobileMenu';
import Navigation, { List, Item } from './Menu.style';

const Menu = () => {
  const { user, menu } = useMenu();

  return (
    <Navigation>
      {!isMobileDevice ? (
        <>
          <List>
            {menu.map(link => (
              <Item key={link.name}>{link.value}</Item>
            ))}
          </List>
          {user ? <UserInfo {...user} /> : null}
          {user ? <LogoutButton /> : null}
        </>
      ) : (
        <>
          {user ? <UserInfo {...user} /> : null}
          <MobileMenu list={menu} />
        </>
      )}
    </Navigation>
  );
};

export default Menu;

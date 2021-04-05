import { useState } from 'react';
import { Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import Navigation, { List, Item, Link, Burger } from './Menu.style';

const MENU_LINKS = [
  { name: 'Home', value: '/' },
  { name: 'Materials', value: '/materials' },
  { name: 'Contacts', value: '/contacts' },
];

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuToggle = () => {
    setMenuIsOpen(prev => !prev);
  };

  return (
    <Navigation>
      <Burger>
        {menuIsOpen ? (
          <CloseIcon onClick={menuToggle} />
        ) : (
          <MenuIcon onClick={menuToggle} />
        )}
      </Burger>
    </Navigation>
  );
};
export default Menu;

{
  /* <List>
        {MENU_LINKS.map(link => (
          <Item key={link.name}>
            <Link to={link.value}>{link.name}</Link>
          </Item>
        ))}
      </List> */
}

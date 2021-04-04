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
          <Item>
            <Link to={link.value}>{link.name}</Link>
          </Item>
        ))}
      </List>
    </Navigation>
  );
};
export default Menu;

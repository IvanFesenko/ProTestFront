import { useSelector } from 'react-redux';

import { isMobileDevice } from 'services/utils';
import { LogoutButton } from 'components';
import { Link } from 'components/Header/Menu/Menu.style';
import { getUser } from 'redux/auth/authSelectors';

const AUTHORIZED_MENU_LINKS = [
  { name: 'Home', value: <Link to={'/'}>Home</Link> },
  { name: 'Materials', value: <Link to={'/materials'}>Materials</Link> },
  { name: 'Contacts', value: <Link to={'/contacts'}>Contacts</Link> },
];

const NOT_AUTHORIZED_MENU_LINKS = [
  { name: 'Contacts', value: <Link to={'/contacts'}>Contacts</Link> },
];

export const useMenu = () => {
  const user = useSelector(getUser);

  const menu = !user
    ? NOT_AUTHORIZED_MENU_LINKS
    : !isMobileDevice
    ? AUTHORIZED_MENU_LINKS
    : [
        ...AUTHORIZED_MENU_LINKS,
        {
          name: '',
          value: <LogoutButton />,
        },
      ];

  return { user, menu };
};

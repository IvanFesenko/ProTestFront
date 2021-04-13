import { useHistory } from 'react-router';

import { LogOut } from './LogoutButton.style';

import { authLogOut } from 'services/API';
import { Icon } from './Icon';

const LogoutButton = () => {
  const history = useHistory();

  const onClickHandler = () => {
    authLogOut();
    history.push('/auth');
  };

  return (
    <LogOut onClick={onClickHandler}>
      <Icon />
    </LogOut>
  );
};

export default LogoutButton;

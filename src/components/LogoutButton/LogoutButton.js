import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { LogOut } from './LogoutButton.style';

import authOperations from 'redux/auth/authOperations';
import { Icon } from './Icon';

const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(authOperations.logOut());
    history.push('/auth');
  };

  return (
    <LogOut onClick={onClickHandler}>
      <Icon />
    </LogOut>
  );
};

export default LogoutButton;

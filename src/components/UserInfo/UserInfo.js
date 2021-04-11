import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

import { authLogOut } from 'services/API';

import styles from './UserInfo.module.css';

import avatar from './../../assets/images/avatar.png';

const UserInfo = ({ avatar, name }) => {
  const history = useHistory();

  const onSignOut = () => {
    authLogOut();
    history.push('/auth');
  };

  return (
    <div className={styles.userInfo}>
      <img src={avatar} alt="avatar" />
      <b>{name}</b>
      <i className={styles.signOut} onClick={onSignOut}></i>
    </div>
  );
};

UserInfo.defaultProps = {
  avatar: avatar,
  name: 'Name',
};

UserInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserInfo;

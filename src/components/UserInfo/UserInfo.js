import PropTypes from 'prop-types';

import { ProfileLink, Avatar, Name } from './UserInfo.style';

const UserInfo = ({ avatar, name }) => {
  return (
    <ProfileLink to={'/profile'}>
      <Avatar src={avatar} alt={'avatar'} />
      <Name>{name}</Name>
    </ProfileLink>
  );
};

UserInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserInfo;

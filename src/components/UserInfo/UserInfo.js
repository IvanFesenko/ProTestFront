import PropTypes from 'prop-types';
import { isMobileDevice } from 'services/utils';
import { ProfileLink, Avatar, Name } from './UserInfo.style';

const UserInfo = ({ avatar, name }) => {
  return (
    <ProfileLink to={'/profile'}>
      <Avatar src={avatar} alt={'avatar'} />
      {!isMobileDevice ? <Name>{name}</Name> : null}
    </ProfileLink>
  );
};

UserInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserInfo;

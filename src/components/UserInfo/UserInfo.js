import PropTypes from 'prop-types';
import { isMobileDevice } from 'services/utils';
import { ProfileLink, Avatar, Name } from './UserInfo.style';

const UserInfo = ({ avatarURL, name }) => {
  return (
    <ProfileLink to={'/profile'}>
      <Avatar src={avatarURL} alt={'avatar'} />
      {!isMobileDevice ? <Name>{name}</Name> : null}
    </ProfileLink>
  );
};

UserInfo.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserInfo;

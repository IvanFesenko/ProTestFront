import PropTypes from 'prop-types';
import SocialButtonBlock from './SocialButtonBlock';

import {
  Card,
  Name,
  Position,
  Photo,
  Location,
  LocationIcon,
  DescriptionWrapper,
} from './ContactCard.style';

const ContactCard = ({ img, name, position, social, location }) => {
  return (
    <Card>
      <Photo src={img} alt={name} />
      <DescriptionWrapper>
        <Name>{name}</Name>
        <Position>{position}</Position>
        <Location>
          <LocationIcon />
          {location}
        </Location>
        <SocialButtonBlock social={social} />
      </DescriptionWrapper>
    </Card>
  );
};

ContactCard.defaultProps = {
  img: '',
  name: '',
  position: '',
  social: '',
  location: '',
};

ContactCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  social: PropTypes.shape({
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    telegram: PropTypes.string.isRequired,
  }),
};

export default ContactCard;

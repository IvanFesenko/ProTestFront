import PropTypes from 'prop-types';
import SocialButtonBlock from './SocialButtonBlock';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
  Card,
  DescriptionWrapper,
  Name,
  Position,
  Description,
  Photo,
  Location,
} from './ContactCard.style';

const ContactCard = ({
  img,
  name,
  position,
  description,
  social,
  location,
}) => {
  return (
    <Card>
      <Photo src={img} alt={`${name}`} />
      <DescriptionWrapper>
        <Name>{name}</Name>
        <Position>{position}</Position>
        <Location>
          <LocationOnIcon style={{ fontSize: 18 }} />
          {location}
        </Location>
        <Description>{description}</Description>
        <SocialButtonBlock social={social} />
      </DescriptionWrapper>
    </Card>
  );
};

ContactCard.defaultProps = {
  img: '',
  name: '',
  position: '',
  description: '',
  social: '',
  location: '',
};

ContactCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.shape({
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    telegram: PropTypes.string.isRequired,
  }),
  location: PropTypes.string.isRequired,
};

export default ContactCard;

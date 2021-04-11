import PropTypes from 'prop-types';
import {
  Card,
  DescriptionWrapper,
  Name,
  Position,
  Description,
  Photo,
} from './ContactCard.style';

const ContactCard = ({ img, title, position, description }) => {
  return (
    <Card>
      <Photo src={img} alt={`${title}`} />
      <DescriptionWrapper>
        <Name>{title}</Name>
        <Position>{position}</Position>
        <Description>{description}</Description>
      </DescriptionWrapper>
    </Card>
  );
};

ContactCard.defaultProps = {
  img: '',
  title: '',
  position: '',
  description: '',
};

ContactCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ContactCard;

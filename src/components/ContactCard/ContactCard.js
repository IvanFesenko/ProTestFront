import PropTypes from 'prop-types';
import styles from './ContactCard.module.css';

const ContactCard = ({img, title, position, description}) => {
    return (
        <div className={styles.ContactsCardList}>
            <div className={styles.ContactsCard}>
                <img src={img} alt="name" />
                <div>
                    <h5>{title}</h5>
                    <span>{position}</span>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    ) 
}

ContactCard.defaultProps = {
    img:'',
    title:'',
    position:'',
    description:''
}

ContactCard.propTypes = {
    img:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    position:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired
}
export default ContactCard
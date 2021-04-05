
import styles from './ContactCard.module.css'
import img from './../../assets/images/Rectangle_17.png'

const ContactCard = () => {
    return (
            <div className={styles.ContactsCardList}>
                 <div className={styles.ContactsCard}>
                    <img src={img} alt="name" />
                    <div>
                        <h5>Name</h5>
                        <span>Front-End Developer </span>
                        <p>
                            Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century.
                        </p>
                    </div>
                 </div>
            </div>
    ) 
}

export default ContactCard
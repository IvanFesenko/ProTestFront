import ContactCard from './../../components/ContactCard'

import styles from './ContactsPage.module.css'

const ContactsPage = () => {
    return (
       <>
        <h2 className={styles.OutTeam} >Our team</h2>
        <hr className={styles.hr}  />
        <div className={styles.ContactsPageList}>
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
        </div>
       </>
    ) 
}

export default ContactsPage
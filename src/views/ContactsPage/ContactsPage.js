import ContactCard from './../../components/ContactCard'
import styles from './ContactsPage.module.css'
import img from './../../assets/images/Rectangle_17.png'


const contacts = [
    {id:0, img, title:'Name 1', position:'Front-End Developer', description:'Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century.' },
    {id:1, img, title:'Name 2', position:'Front-End Developer', description:'Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century.' },
    {id:2, img, title:'Name 3', position:'Front-End Developer', description:'Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century.' },
    {id:3, img, title:'Name', position:'Front-End Developer', description:'Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century.' },
    {id:4, img, title:'Name', position:'Front-End Developer', description:'Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century.' },
    {id:5, img, title:'Name', position:'Front-End Developer', description:'Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century.' },
    {id:6, img, title:'Name', position:'Front-End Developer', description:'Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century.' },
    {id:7, img, title:'Name', position:'Front-End Developer', description:'Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century.' },
    {id:8, img, title:'Name', position:'Front-End Developer', description:'Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century.' },
]


const ContactsPage = () => {
    return (
       <>
            <h2 className={styles.OutTeam} >Our team</h2>
            <div className={styles.ContactsPageList}>

                {
                    contacts.map((contact, k)=>(<ContactCard key={k} {...contact}/>))
                }

            </div>
       </>
    ) 
}

export default ContactsPage
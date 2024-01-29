import { Contact } from '../Contact/Contact'
import css from '../ContactList/ContactList.module.css'


export const ContactList = ({ allContacts,onDeleteContact }) => {
    // console.log(typeof(AllContacts));
    return (<div>
        <ul className={ css.allContacts}>
            {
                allContacts.map(value => (
                    <li className={css.contactContainet} key={ value.id}>
                         <Contact  contact={value} onDeleteContact={ onDeleteContact} />
                    </li>
            )) }
        
        </ul>
    </div>
)}
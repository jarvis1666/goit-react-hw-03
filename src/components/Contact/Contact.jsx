import { IoPerson } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

import css from '../Contact/Contact.module.css'

export const Contact = ({ contact: { id, name, number }, onDeleteContact}) => {
    
    
    return (
        <>
            <div>
                <p><IoPerson />  { name}</p>
                <p><IoCall />  {number}</p>
            </div>
            <button onClick={() => onDeleteContact(id)} type="button" className={ css.btnDelete}>Delete</button>
        </>
    )
}
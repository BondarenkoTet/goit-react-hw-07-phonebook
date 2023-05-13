import { useSelector, useDispatch } from "react-redux";
import {deleteContactAction} from "redux/contactsSlice";
//import {filteredContacts} from "redux/filterSlice"
import css from "./ContactsList.module.css"
import { useEffect } from "react";
import { selectFilter } from "redux/selectors";
import { fetchContacts } from "redux/operation";
//import * as contactsOperation from "redux/operation"

export default function ContactList () {
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(fetchContacts());
      }, [dispatch]);

    const contactsList = useSelector(state=> state.contacts.contacts.items);
    const filteredContacts = useSelector(selectFilter);

    const removeContacts = contact => {
        dispatch(deleteContactAction(contact.id));
    };
console.log("contactsList", contactsList);

    const onFilter = contactsList.filter(contact => 
        contact.name.toLowerCase().includes(filteredContacts))

    return onFilter.length > 0 ? (
        onFilter.map(contact => (
            <li key={contact.id}>
                <span  className={css["span-name"]}>{contact.name}:</span>
                <span  className={css["span-number"]}>{contact.number}</span> 
                <button 
                    type="button"
                    // name="filter"
                    className={css["delete-btn"]}
                    onClick={() => removeContacts(contact.id)}
                    id={contact.id}
                >Delete
                </button>
            </li>
    )))
    : <p className={css.tag}>No contacts</p>
        
}
        



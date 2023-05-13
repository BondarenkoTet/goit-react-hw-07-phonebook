import { nanoid } from 'nanoid';
import css from '../Form/Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
//import { addContacts } from 'redux/contactsSlice';
import {contactsAction, addContactsAction} from "redux/contactsSlice";
//import {createAsyncThunk} from "redux/contactsSlice"
import {selectContacts} from "redux/selectors"
//import { useEffect } from 'react';


const Form = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    

const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
    name: e.target.name.value,
    number: e.target.number.value,
    id: nanoid(),

};
console.log(contacts);
    if (contacts.find(contact => contact.name === newContact.name)) {
        alert ("This contact is already in your phonebook")
    } else {
        dispatch(addContactsAction(newContact));
    }
    e.target.name.value = '';
    e.target.number.value = '';
};

return (
    <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
            Name
        <input
            type="text"
            name="name"
            className={css.input}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        </label>
        <label>
            Number
        <input
            type="tel"
            name="number"
            className={css.input}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        </label>
        {/* <button type="submit" className={css.btn}>Add contact</button> */}
        <button type="submit" onClick={()=> dispatch(contactsAction()) } className={css.btn}>Add contact</button>
    </form>
);
}
        
export default Form;
        
        
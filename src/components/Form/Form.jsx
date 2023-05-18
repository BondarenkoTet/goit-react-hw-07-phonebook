import { nanoid } from 'nanoid';
import css from '../Form/Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createContacts, getContacts} from "redux/operation";
import {selectContacts} from "redux/selectors"

const Form = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = e => {
        e.preventDefault();
        const newContact = {
            name: e.target.name.value,
            phone: e.target.number.value,
            id: nanoid(),
        };
        if (contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
            alert ("This contact is already in your phonebook")
        } else {dispatch(createContacts(newContact));
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
               // onChange={handleChange}
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            </label>
            <button type="submit" 
                onClick={() => dispatch(getContacts())}
                className={css.btn}>Add contact</button> 
                
        </form>
        
    );
    }
            
    export default Form;


    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');

    // const handleSubmit = e => {
    // e.preventDefault();
    
    // if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
    //     alert ("This contact is already in your phonebook")
    // } else if (contacts.find(contact => contact.number === number)) {
    //     return alert(`This number is already in contacts.`);
    // }
    //     const newContact = {
    //         id: nanoid(),
    //         name,
    //         number
    //     };
    //     dispatch(getContacts(newContact));
    //     reset();
    // };
    // const reset = () => {
    //     setName('')
    //     setNumber('')
    // };
    
    //  const handleChange = e => {
    //     if (e.target.name === 'name') {
    //         setName(e.target.value);
    //     }
    //     if (e.target.name === 'number') {
    //         setNumber(e.target.value);
    //     }
    // };

        
        
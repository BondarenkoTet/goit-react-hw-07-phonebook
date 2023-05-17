
import { selectFilteredContacts } from "redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import css from "./ContactsList.module.css"
import { deleteContacts} from "redux/operation"


const ContactList = () => {
    const dispatch = useDispatch();
    const availableContacts = useSelector(selectFilteredContacts);

    const handleDelete = id => dispatch(deleteContacts(id));

    return availableContacts.length > 0 ? (
        <>
        {availableContacts.map(contact => (
            <li key={contact.id}>
                <span  className={css["span-name"]}>{contact.name}:</span>
                <span  className={css["span-number"]}>{contact.number}</span> 
                <button 
                    type="button"
                    className={css["delete-btn"]}
                    onClick={() => handleDelete(contact.id)}
                    id={contact.id}
                >Delete
                </button>
            </li>
        ))}
        </>
    ) : (<p>No contacts</p>)    
}
export default ContactList;        






    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getContacts());
    // }, [dispatch]);
    
    // const contactsList = useSelector(selectContacts);
    // const filteredContacts = useSelector(selectFilter);
    
    // const removeContacts = id => {
    //     dispatch(deleteContacts(id));
    // };
    // console.log("contactsList", contactsList);

    // const onFilter = contactsList.filter(contact =>
    //     contact.name.toLocaleLowerCase().includes(filteredContacts)
    // );
    


    


    // useEffect(() => {
    //     dispatch(getContacts ());
    //     }, [dispatch]);

    // const contactsList = useSelector(selectContacts);
    // const filteredContacts = useSelector(selectFilter);

    // const removeContacts = id => {
    //     dispatch(deleteContacts(id));
    // };
//console.log("contactsList", contactsList);

    // const availableContacts = contactsList.filter(contact => 
    //     contact.name.toLowerCase().includes(filteredContacts))

    
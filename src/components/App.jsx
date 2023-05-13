
import Form from "./Form/Form";
import  ContactList  from "./Contact/ContactList";
import Filter from "./Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {selectContacts, selectLoader, selectError} from "redux/selectors"
import { fetchContacts } from '../redux/operation';
//import * as contactsOperation from "redux/operation";


export const App = ()=> {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);
  const error=useSelector(selectError)
  const contacts =useSelector(selectContacts)
  
  useEffect(() => {
      dispatch(fetchContacts());
      }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
        <Form />
      <h2>Contacts</h2> 
        <Filter/>
        {isLoading && <p>Loading ...</p>}
        {error && <p>{error}</p>}
        {contacts.length >0 && ( <ContactList /> )}
    </>
  )
}



// const App = () => {
  
//   const [contacts, setContacts] = useState(() => { 
//     return JSON.parse(window.localStorage.getItem("contacts")) ?? "";
//   })
//   const [filter, setFilter] = useState("");
  
//   useEffect(() => {
//     window.localStorage.setItem("contacts", JSON.stringify(contacts));
//     }, [contacts])
  
//   const handleAddContact = newContact => {
//     if (contacts.find(contact => contact.name === newContact.name)) {
//       alert(`${newContact.name} is already in your contacts.`);
//     } else {
//       setContacts([...contacts, newContact])
//       window.localStorage.setItem('contacts', JSON.stringify(contacts))
//     }
//   };
// const formSubmithandler = data => {
//     console.log(data)
//   };

//   const changeFilter= (event) => {
//     setFilter(event.target.value)
// };

//     const getVisibleContacts = () => {
//     return contacts.filter(contact =>
//       (contact.name.toLowerCase().includes(filter))
//       )
//   }

//   const deleteContact = contactId => {
//     setContacts(contacts.filter(contact => contact.id !== contactId));
//     } 
  
//   const visibleContacts = getVisibleContacts();

//   return (
//     <>
//       <h1>Phonebook</h1>
//         <Form onSubmit={formSubmithandler}
//           addContact={handleAddContact}
//           contacts={contacts}
//         />
//         <h2>Contacts</h2> 
//           <Filter
//           value={filter}
//           onChange={changeFilter}
//         />
//         <ContactList 
//           contactsArr={visibleContacts}
//           deleteContact={deleteContact}
//         />
//     </>
//   )
// }

// export default App








 




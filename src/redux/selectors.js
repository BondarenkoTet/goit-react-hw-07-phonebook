
export const selectContacts = state => state.contacts.items;
export const selectLoader = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;


export const selectFilteredContacts = state => {
    const contacts = selectContacts(state);
    const filterValue = selectFilter(state);
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue));
    
    return filteredContacts;
}
    
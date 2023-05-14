import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContact } from './operation';


export const contactsAction = createAsyncThunk("contacts/fetchContacts", async()=>{
    return await fetchContacts()
})
export const addContactsAction = createAsyncThunk("contacts/addContacts", async(data)=>{
    return await addContacts(data)
})
export const deleteContactAction = createAsyncThunk("contacts/deleteContact", async(id)=>{
    return await deleteContact(id)
})
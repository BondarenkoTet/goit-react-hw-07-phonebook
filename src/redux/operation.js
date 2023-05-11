import axios from "axios";
//import { createAsyncThunk } from "@reduxjs/toolkit";



//axios.defaults.baseURL = "https://645a565b95624ceb21feeff6.mockapi.io" 

const BASE_URL = "https://645a565b95624ceb21feeff6.mockapi.io" ; 

export const fetchContacts = async() =>{
    const contacts = await axios.get(`${BASE_URL}/contacts/contacts`);
    return contacts.data;
};

export const addContacts = async() =>{
    // const contacts = await axios.post(`${BASE_URL}/contacts/contacts`, {...contacts});
    // return contacts.data;

};

export const deleteContact = async id =>{
    const contacts = await axios.delete(`${BASE_URL}/contacts/contacts/${id}`);
    return contacts.data.id;
};
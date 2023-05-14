import axios from "axios";


axios.defaults.baseURL = "https://645a565b95624ceb21feeff6.mockapi.io" 


export const fetchContacts = async() =>{
    const contacts = await axios.get("/contacts");
    return contacts.data;
};

export const addContacts = async() =>{
    const contacts = await axios.post("/contacts");
    return contacts.data;

};

export const deleteContact = async id =>{
    const contacts = await axios.delete(`${axios.defaults.baseURL}/contacts${id}`);
    return contacts.data.id;
};


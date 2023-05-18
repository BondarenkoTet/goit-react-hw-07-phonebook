import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://645a565b95624ceb21feeff6.mockapi.io" 

export const getContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            console.log(response.data);
            return response.data;            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const createContacts = createAsyncThunk(
    "contacts/createContacts",
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", contact);
            return response.data; 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

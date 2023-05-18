import { createSlice } from '@reduxjs/toolkit';
import{contactsInitialState} from "redux/initials";


const filterSlice = createSlice({
    name: "filter",
    initialState: contactsInitialState,
    reducers: {
        filteredContacts (state, {payload}) {  
            state.isLoading = false;
            state.filter = payload; 
            // return (state=payload)
        }
}});

export const { filteredContacts} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {contactsInitialState} from "redux/initials";
import { getContacts ,
        createContacts, 
        deleteContacts} from "redux/operation"


const handlePending = state => {
    state.isLoading = true
}
const  handleFulfilled= state => {
    state.isLoading = false;
    state.error = null; 
}
const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
};
const handleFulfilledGet = (state, {payload})=>{
    state.items=payload;
}
const handleFulfilledCreate = (state, {payload})=>{
    state.items.push(payload);
}    
const handleFulfilledDelete = (state, {payload})=>{
    const index = state.items.findIndex(contact => contact.id === payload.id);
    state.items.splice(index, 1);     
}

const contactsFuncArr = [getContacts, createContacts, deleteContacts]
const getContactsFuncArr = (type) => contactsFuncArr.map((el) => el[type])


export const contactsSlice = createSlice({
    name: "contacts",
    initialState : contactsInitialState,
    extraReducers: (builder)=> {
        builder
                .addCase(getContacts.fulfilled, handleFulfilledGet)
                .addCase(createContacts.fulfilled, handleFulfilledCreate)
                .addCase(deleteContacts.fulfilled, handleFulfilledDelete)
                .addMatcher(isAnyOf(...getContactsFuncArr("pending")), handlePending)
                .addMatcher(isAnyOf(...getContactsFuncArr("fulfilled")), handleFulfilled )
                .addMatcher(isAnyOf(...getContactsFuncArr("rejected")), handleRejected)
    },
})

    export const contactsReducer = contactsSlice.reducer;
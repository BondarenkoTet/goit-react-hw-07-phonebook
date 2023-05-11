import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import{fetchContacts} from "redux/operation";
import {contactsInitialState} from "redux/initials";

const handlePending = (state, action) => {
    state.isLoading = true
}
const handleFulfilled = (state, action)=>{
    state.isLoading = false;
    state.contacts = action.payload;
    state.error = "";
}
const handleRejected = (state, action) => {
    state.filter = action.payload;   
}
export const contactsAction = createAsyncThunk("contacts/fetchContacts", async()=>{
    return await fetchContacts()
})

const contactsSlice = createSlice({
    name: "contacts",
    initialState : contactsInitialState,
    extraReducers: (builder)=> {
        builder.addCase(contactsAction.pending, handlePending)
                .addCase(contactsAction.fulfilled, handleFulfilled)
                .addCase(contactsAction.rejected, handleRejected)
    },
        // [contactsAction.pending]: (state, action)=>{
        //     state.isLoading = true;
        // },
        // [contactsAction.fulfilled]: (state, action)=>{
        //     state.isLoading = false;
        //     state.contacts = action.payload;
        //     state.error = "";
        // },
        // [contactsAction.rejected]: (state, action)=>{
        //     state.isLoading = false;
        //     state.error =action.payload;
        // }
//     }
 })

// extraReducers: {
//     [contactsAction.pending]: (state, action)=>{
//         state.isLoading = true;
//     },
//     [contactsAction.fulfilled]: (state, action)=>{
//         state.isLoading = false;
//         state.contacts = action.payload;
//         state.error = "";
//     },
//     [contactsAction.rejected]: (state, action)=>{
//         state.isLoading = false;
//         state.error =action.payload;
//     }
// }
    // const inputSlice = createSlice({
    // name: 'contacts',
    // initialState: contactsInitialState,
    // reducers: {
//     addContacts: (state, action) => {
//         state.contacts.push(action.payload);
//     },
//     deleteContacts: (state, action) => {
//         state.contacts= state.contacts.filter(contact => contact.id !== action.payload);
//     },
//     //     filteredContacts: (state, action) => {
//     //         state.filter = action.payload;   
//     // }
// }
// })

export const { addContacts, deleteContacts } =
    contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer

//-----------------------------
// export const contactsAction = () => {
//     return async(dispatch)=> { 
//         try{
//             dispatch(contactsSlice.actions.fetching())
//             const data = await fetchContacts()
//             dispatch(contactsSlice.actions.fetchSuccess(data))
//         }
//         catch(error) {
//             dispatch(contactsSlice.actions.fetchError(error))
//         }
//     }
// }

//----------- actions
// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState : contactsInitialState,
    // reducers: {
    //     fetching:(state, action)=>{
    //         state.isLoading = true;
    //     },
    //     fetchSuccess:(state, action) => {
    //         state.isLoading = false;
    //         state.contacts = action.payload;
    //         state.error = "";
    //     },
    //     fetchError:(state, action) => {
    //         state.isLoading = false;
    //         state.error =action.payload;
    //     }
    // }
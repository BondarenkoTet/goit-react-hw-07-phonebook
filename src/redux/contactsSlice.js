import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {contactsInitialState} from "redux/initials";
import { fetchContacts, addContacts, deleteContact } from './operation';


export const handlePending = state => {
    state.isLoading = true
}
export const handleFulfilled = (state, {payload})=>{
    state.isLoading = false;
    state.contacts = payload;
    state.error = "";
}
export const handleRejected = (state, {payload})=>{
        state.isLoading = false;
        state.error = payload;  
}
export const contactsAction = createAsyncThunk("contacts/fetchContacts", async()=>{
    return await fetchContacts()
})
export const addContactsAction = createAsyncThunk("contacts/addContacts", async()=>{
    return await addContacts()
})
export const deleteContactAction = createAsyncThunk("contacts/deleteContact", async()=>{
    return await deleteContact()
})
const contactsFuncArr = [contactsAction, addContactsAction, deleteContactAction]

const getContactsFuncArr = (type) => contactsFuncArr.map((el) => el[type])


const contactsSlice = createSlice({
    name: "contacts",
    initialState : contactsInitialState,
    // {
    //     contacts: [],
    //     isLoading: false,
    //     error: null,
    // },
    
    extraReducers: (builder)=> {
        builder
        //.addCase(contactsAction.pending, handlePending)
                // .addCase(contactsAction.fulfilled, handleFulfilled)
                // .addCase(contactsAction.rejected, handleRejected)
                // //.addCase(addContactsAction.pending, handlePending)
                // .addCase(addContactsAction.fulfilled, handleFulfilled)
                // .addCase(addContactsAction.rejected, handleRejected)
                // //.addCase(deleteContactAction.pending, handlePending)
                // .addCase(deleteContactAction.fulfilled, handleFulfilled)
                // .addCase(deleteContactAction.rejected, handleRejected)
                .addMatcher(isAnyOf(...getContactsFuncArr("pending")), handlePending
                ).addMatcher(isAnyOf(...getContactsFuncArr("fulfilled")), handleFulfilled
                ).addMatcher(isAnyOf(...getContactsFuncArr("rejected")), handleRejected
                )
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

// export const { deleteContacts } =
//     contactsSlice.actions;

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
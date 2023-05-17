import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer } from "redux/contactsSlice" ;
import { filterReducer } from "redux/filterSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});
    
// import {
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER, } from 'redux-persist';

    
        // middleware (getDefaultMiddleware) { 
        //             return getDefaultMiddleware({
        //             serializableCheck: {
        //                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        //             },
                
    //}});



// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'contacts',
//     storage,
//     whitelist: ['contacts'],
//     }

// export const store = configureStore({
//     reducer: inputReducer,
//     middleware (getDefaultMiddleware) { 
//         return getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     });
//     },
// });

// export const persistor = persistStore(store)

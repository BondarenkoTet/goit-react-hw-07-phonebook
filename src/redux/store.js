import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer } from "./contactsSlice" ;
import { filterReducer } from "./filterSlice";



// const customMiddleware =(stor) =>{
//     return(next)=>{
//         return(action)=>{
//             //console.log(store)
//             if (typeof action === 'function') {
//                 action(store.dispatch)
//                 return
//             }
//         return next(action)
//     }
// }
// }

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			
		}),

    // middleware: getDefaultMiddleware => [
    //     ...getDefaultMiddleware(),
    //     contactsReducer.middleware,
    // ],

    // middleware: [customMiddleware],
});








//import {contactsReducer as rootReducer} from "../redux/inputSlice"

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
// const inputReducer = persistReducer(
//     persistConfig,
//     rootReducer
// )

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

// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from '@reduxjs/toolkit/query';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';

// export const store = configureStore({
//   reducer: {
//     !!!somereducer: reducer,
//   },
//   devTools: process.env.NODE_ENV === 'development',
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//     !!!SOME.middleware,
//   ],
// });

// setupListeners(store.dispatch);
// export const persistor = persistStore(store);
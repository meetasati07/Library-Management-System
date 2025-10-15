import {configureStore} from '@reduxjs/toolkit';
import authenticationReducer from './slices/AuthenticationSlice'
import modalReducer from './slices/ModalSlices';
import bookReducer from './slices/BookSlice'

export const store = configureStore( {
    reducer: {
        authentication: authenticationReducer,
        modal: modalReducer,
        book: bookReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { configureStore } from '@reduxjs/toolkit'
import formReducer from './form/form';
import productReducer from './products/products';
import utilReducer from './utils/utils';

export const store = configureStore({
    reducer:{
        products:productReducer,
        form:formReducer,
        utils:utilReducer
    }
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { configureStore } from "@reduxjs/toolkit";
import { getBooksApi } from '../Fearures/getBook/getBookApi'

export const store = configureStore({
    reducer: {
        [getBooksApi.reducerPath] : getBooksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(getBooksApi.middleware)
})
import { configureStore } from "@reduxjs/toolkit";
import { getBooksApi } from '../Fearures/getBook/getBookApi'
import cartSlicer from '../Fearures/getBook/cartSlicer'

export const store = configureStore({
    reducer: {
        cart: cartSlicer,
        [getBooksApi.reducerPath] : getBooksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(getBooksApi.middleware)
})
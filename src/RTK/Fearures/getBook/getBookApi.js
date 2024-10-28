import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getBooksApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com',
    }),
    endpoints: (builder) => ({
        booksProductsApi: builder.query({
            query: () => `/products`
        }),
        singleBooksApi: builder.query({
            query: (id) => `/products/${id}`
        })
    })
})

export const {useBooksProductsApiQuery, useSingleBooksApiQuery} = getBooksApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getBooksApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://fakestoreapi.com',
        baseUrl: 'https://kichukkhon.arnobghosh.me/api',
    }),
    endpoints: (builder) => ({
        booksProductsApi: builder.query({
            query: ({ sortFiltering = "", publication = "", authors = "", subject = ""} = {}) => {
                let url = `/products?sort_by=${sortFiltering}`
                if (publication) url += `&publication=${publication}`
                if (authors) url += `&author=${authors}`
                if (subject) url += `&subject=${subject}`
                return url
            }
        }),
        getAutors: builder.query({
            query: () => `/authors`
        }),
        getPublications: builder.query({
            query: () => `/publications`
        }),
        getCategory: builder.query({
            query: () => `/categories`
        }),
        getSubjects: builder.query({
            query: () => `/subjects`
        }),
        singleBooksApi: builder.query({
            query: (slug) => `/products/${slug}`
        })
    })
})

export const { useBooksProductsApiQuery, useSingleBooksApiQuery, useGetCategoryQuery, useGetAutorsQuery, useGetPublicationsQuery, useGetSubjectsQuery } = getBooksApi
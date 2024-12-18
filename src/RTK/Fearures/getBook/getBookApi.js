import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getBooksApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://fakestoreapi.com',
        baseUrl: 'https://kichukkhon.arnobghosh.me/api',
    }),
    endpoints: (builder) => ({
        booksProductsApi: builder.query({
            query: ({ sortFiltering = "", publication = "", authors = "", subject = "", limit, category = ""} = {}) => {
                let url = `/products?sort_by=${sortFiltering}`
                if (publication) url += `&publication=${publication}`
                if (authors) url += `&author=${authors}`
                if (subject) url += `&subject=${subject}`
                if (limit) url += `&limit=${limit}`
                if (category) url += `&categories=${category}`
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
        }),
        allDistrict: builder.query({
            query: () => `/districts`
        }),
        allUpazilas: builder.query({
            query: () => `/upazilas`
        }),
        getProfile: builder.query({
            query: (id) => `/getProfile/${id}`
        }),
    })
})

export const { useBooksProductsApiQuery, useSingleBooksApiQuery, useGetCategoryQuery, useGetAutorsQuery, useGetPublicationsQuery, useGetSubjectsQuery, useAllDistrictQuery, useAllUpazilasQuery, useGetProfileQuery } = getBooksApi
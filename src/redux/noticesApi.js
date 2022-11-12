import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'notices',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://unknown', // <-------ВКАЗАТИ БАЗОВИЙ ЮРЛ БЕКУ!!!!!!!!!!!!
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Notices'],
  endpoints: builder => ({
    getNotices: builder.query({
      query: categoryName => `/notices/${categoryName}`,
      providesTags: ['Notices'],
    }),
    addNotice: builder.mutation({
      query: value => ({
        url: `/notices/`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Notices'],
    }),
  }),
});

export const { useGetNoticesQuery, useAddNoticeMutation } = noticesApi;

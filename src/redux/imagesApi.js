import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const imagesApi = createApi({
  reducerPath: 'images',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Images'],
  endpoints: builder => ({
    getImage: builder.query({
      query: request => request,
      providesTags: ['Images'],
    }),
  }),
});

export const { useGetImageQuery } = imagesApi;

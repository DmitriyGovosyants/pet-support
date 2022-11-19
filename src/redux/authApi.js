import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authfetch',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api', // <-------ВКАЗАТИ БАЗОВИЙ ЮРЛ БЕКУ!!!!!!!!!!!!
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => `/user/current`,
      providesTags: ['Auth'],
    }),
    signUp: builder.mutation({
      query: value => ({
        url: `/auth/signup`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Auth'],
    }),
    logIn: builder.mutation({
      query: value => ({
        url: `/auth/login`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Auth'],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
} = authApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const friendsApi = createApi({
  reducerPath: 'friends',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8081/api',
  }),
  tagTypes: ['Friends'],
  endpoints: builder => ({
    getFriends: builder.query({
      query: () => '/services',
      providesTags: ['Friends'],
    }),
  }),
});

export const { useGetFriendsQuery } = friendsApi;

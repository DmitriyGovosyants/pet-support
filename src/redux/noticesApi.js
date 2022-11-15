import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'notices',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/notices', // <-------ВКАЗАТИ БАЗОВИЙ ЮРЛ БЕКУ!!!!!!!!!!!!
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
      query: categoryName => `${categoryName}`,
      providesTags: ['Notices'],
    }),
    getFavorites: builder.query({
      query: () => '/favorites',
      providesTags: ['Notices'],
    }),
    addNoticeToFavourite: builder.mutation({
      query: noticeId => ({
        url: `/favorites/${noticeId}`,
        method: 'PATCH',
        body: '',
      }),
      invalidatesTags: ['Notices'],
    }),
    removeNoticeFromFavourite: builder.mutation({
      query: noticeId => ({
        url: `/favorites/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices'],
    }),
    getPrivateNotices: builder.query({
      query: () => '/private',
      providesTags: ['Notices'],
    }),
    removePrivateNotice: builder.mutation({
      query: noticeId => ({
        url: `/private/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices'],
    }),
    addNotice: builder.mutation({
      query: value => ({
        url: `/`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Notices'],
    }),
  }),
});

export const {
  useGetNoticesQuery,
  useGetFavoritesQuery,
  useAddNoticeToFavouriteMutation,
  useRemoveNoticeFromFavouriteMutation,
  useGetPrivateNoticesQuery,
  useRemovePrivateNoticeMutation,
  useAddNoticeMutation,
} = noticesApi;

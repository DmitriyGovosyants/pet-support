import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/users', // <-------ВКАЗАТИ БАЗОВИЙ ЮРЛ БЕКУ!!!!!!!!!!!!
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Info', 'Pet'],
  endpoints: builder => ({
    //=========useFetchUserQuery=======
    fetchUser: builder.query({
      query: () => ({
        url: '/info',
      }),
      invalidatesTags: ['Info'],
    }),
    //----- useFetchPetsQuery --------
    fetchPets: builder.query({
      query: () => `/pets`,
      providesTags: ['Pet'],
    }),

    //------ useDeletePetMutation -------
    deletePet: builder.mutation({
      query: PetId => ({
        url: `/pets/${PetId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Pet'],
    }),

    //------ useEditPetMutation ---------
    editPet: builder.mutation({
      query: pet => ({
        url: `/pets/${pet.id}`,
        method: 'PUT',
        body: {
          name: pet.name,
          birthdate: pet.birthdate,
          breed: pet.breed,
          avatar: pet.avatar,
          comments: pet.comments,
        },
      }),
      invalidatesTags: ['Pet'],
    }),

    //------- useCreatePetMutation -------
    createPet: builder.mutation({
      query: newPet => ({
        url: '/pets',
        method: 'POST',
        body: newPet,
      }),
      invalidatesTags: ['Pet'],
    }),
  }),
});

export const {
  useFetchUserQuery,
  useFetchPetsQuery,
  useDeletePetMutation,
  useEditPetMutation,
  useCreatePetMutation,
} = usersApi;

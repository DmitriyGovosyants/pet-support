import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const petApi = createApi({
  reducerPath: 'petApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080', // <-------ВКАЗАТИ БАЗОВИЙ ЮРЛ БЕКУ!!!!!!!!!!!!
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;
      headers.set('Authorization', token);
      return headers;
    },
  }),
  tagTypes: ['Pet'],
  endpoints: builder => ({
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
        method: 'PATCH',
        body: {
          name: pet.name,
          date: pet.date,
          breed: pet.breed,
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
  useFetchPetsQuery,
  useDeletePetMutation,
  useEditPetMutation,
  useCreatePetMutation,
} = petApi;

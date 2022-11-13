import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const petApi = createApi({
  reducerPath: 'petApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://unknown', // <-------ВКАЗАТИ БАЗОВИЙ ЮРЛ БЕКУ!!!!!!!!!!!!
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
      query: () => `/pets`, //-----home?   '/' or '/pets' - поки що немає роутів
      providesTags: ['Pet'],
    }),

    //------ useDeletePetMutation -------
    deletePet: builder.mutation({
      query: PetId => ({
        url: `/pets/${PetId}`, //-----home?   '/' or '/pets' - поки що немає роутів
        method: 'DELETE',
      }),
      invalidatesTags: ['Pet'],
    }),

    //------ useEditPetMutation ---------
    editPet: builder.mutation({
      query: pet => ({
        url: `/pets/${pet.id}`, //-----home?   '/' or '/pets' - поки що немає роутів
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
        url: '/pets', //-----home?   '/' or '/pets' - поки що немає роутів
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

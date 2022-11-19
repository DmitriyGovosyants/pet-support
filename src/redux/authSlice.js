import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {
    setCredentials: (state, { payload: token }) => {
      state.token = token;
    },
    clearCredentials: state => {
      state.token = null;
    },
  },
});

export const { setCredentials, clearCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = state => state.auth.token;

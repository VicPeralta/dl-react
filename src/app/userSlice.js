import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { id: '', token: '' },
  fetching: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginBegin: () => (
      {
        ...initialState,
        fetching: true,
      }
    ),
    loginSuccess: (state, action) => (
      {
        ...action.payload,
        fetching: false,
      }
    ),
    loginError: () => (
      {
        ...initialState,
        fetching: false,
      }
    ),
    setUser: (state, action) => (
      {
        ...state,
        ...action.payload,
      }
    ),
  },
});

export const {
  loginBegin, loginSuccess, loginError, setUser,
} = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  fetching: false,
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    getStudentsBegin: (state) => (
      {
        ...state,
        fetching: true,
      }
    ),
    getStudentsSuccess: (state, action) => (
      {
        ...state,
        students: action.payload,
        fetching: false,
      }
    ),
    getStudentsFailure: (state) => (
      {
        ...state,
        fetching: false,
      }
    ),
  },
});
export const { getStudentsBegin, getStudentsSuccess, getStudentsFailure } = studentsSlice.actions;
export default studentsSlice.reducer;

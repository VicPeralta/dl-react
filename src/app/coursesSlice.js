import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  fetching: false,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    getCoursesBegin: (state) => (
      {
        ...state,
        fetching: true,
      }
    ),
    getCoursesSuccess: (state, action) => (
      {
        ...state,
        courses: action.payload,
        fetching: false,
      }
    ),
    getCoursesFailure: (state) => (
      {
        ...state,
        fetching: false,
      }
    ),
  },
});
export const { getCoursesBegin, getCoursesSuccess, getCoursesFailure } = coursesSlice.actions;
export default coursesSlice.reducer;

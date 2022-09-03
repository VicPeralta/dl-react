import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  grades: [],
  fetching: false,
};

const gradesSlice = createSlice({
  name: 'grades',
  initialState,
  reducers: {
    getGradesBegin: (state) => (
      {
        ...state,
        fetching: true,
      }
    ),
    getGradesSuccess: (state, action) => (
      {
        ...state,
        grades: action.payload,
        fetching: false,
      }
    ),
    getGradesFailure: (state) => (
      {
        ...state,
        fetching: false,
      }
    ),
  },
});
export const { getGradesBegin, getGradesSuccess, getGradesFailure } = gradesSlice.actions;
export default gradesSlice.reducer;

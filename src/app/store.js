import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './studentsSlice';
import coursesReducer from './coursesSlice';
import gradesReducer from './gradesSlice';

const store = configureStore({
  reducer: {
    students: studentsReducer,
    courses: coursesReducer,
    grades: gradesReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './studentsSlice';
import coursesReducer from './coursesSlice';
import gradesReducer from './gradesSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    students: studentsReducer,
    courses: coursesReducer,
    grades: gradesReducer,
    user: userReducer,
  },
});

export default store;

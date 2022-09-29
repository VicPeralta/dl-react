import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './studentsSlice';
import coursesReducer from './coursesSlice';
import gradesReducer from './gradesSlice';
import userReducer from './userSlice';
import appConfigReducer from './appConfigSlice';

const store = configureStore({
  reducer: {
    students: studentsReducer,
    courses: coursesReducer,
    grades: gradesReducer,
    user: userReducer,
    appConfig: appConfigReducer,
  },
});

export default store;

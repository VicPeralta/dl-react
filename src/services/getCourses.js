import { getCoursesBegin, getCoursesSuccess, getCoursesFailure } from '../app/coursesSlice';

const BASE_URL = 'http://127.0.0.1:3001/courses/';

function getCoursesList() {
  return async (dispatch) => {
    const url = `${BASE_URL}`;
    dispatch(getCoursesBegin());
    try {
      const response = await fetch(url);
      const json = await response.json();
      dispatch(getCoursesSuccess(json));
    } catch {
      dispatch(getCoursesFailure());
    }
  };
}

export default getCoursesList;

import { getCoursesBegin, getCoursesSuccess, getCoursesFailure } from '../app/coursesSlice';

const BASE_URL = 'http://127.0.0.1:3001/courses/';

function getCoursesList(token) {
  return async (dispatch) => {
    const url = `${BASE_URL}`;
    dispatch(getCoursesBegin());
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      dispatch(getCoursesSuccess(json));
    } catch {
      dispatch(getCoursesFailure());
    }
  };
}

export default getCoursesList;

import { getStudentsBegin, getStudentsSuccess, getStudentsFailure } from '../app/studentsSlice';

const BASE_URL = 'http://127.0.0.1:3001/students';

function getStudentsList(token) {
  return async (dispatch) => {
    const url = `${BASE_URL}`;
    dispatch(getStudentsBegin());
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      dispatch(getStudentsSuccess(json));
    } catch {
      dispatch(getStudentsFailure());
    }
  };
}

export default getStudentsList;

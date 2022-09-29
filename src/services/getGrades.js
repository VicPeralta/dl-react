import { getGradesBegin, getGradesSuccess, getGradesFailure } from '../app/gradesSlice';

const STUDENT_URL = 'http://127.0.0.1:3001/grades/student/';
const COURSE_URL = 'http://127.0.0.1:3001/grades/course/';
const ALL_URL = 'http://127.0.0.1:3001/grades';

function getGradesList(type, id, token) {
  return async (dispatch) => {
    let url = '';
    switch (type) {
      case 'student':
        if (!id) return;
        url = `${STUDENT_URL}${id}`;
        break;
      case 'courses':
        url = `${COURSE_URL}/${id}`;
        break;
      default:
        url = ALL_URL;
    }
    dispatch(getGradesBegin());
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      dispatch(getGradesSuccess(json));
    } catch {
      dispatch(getGradesFailure());
    }
  };
}

export default getGradesList;

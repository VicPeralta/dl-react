import { getGradesBegin, getGradesSuccess, getGradesFailure } from '../app/gradesSlice';

const STUDENT_URL = 'http://127.0.0.1:3001/grades/student/';
const COURSE_URL = 'http://127.0.0.1:3001/grades/course/';

function getGradesList(type, id) {
  return async (dispatch) => {
    const url = type === 'student' ? `${STUDENT_URL}${id}` : `${COURSE_URL}/${id}`;
    dispatch(getGradesBegin());
    try {
      const response = await fetch(url);
      const json = await response.json();
      dispatch(getGradesSuccess(json));
    } catch {
      dispatch(getGradesFailure());
    }
  };
}

export default getGradesList;

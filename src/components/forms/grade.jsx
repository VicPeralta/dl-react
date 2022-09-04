import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import getCoursesList from '../../services/getCourses';
import getStudentsList from '../../services/getStudents';
import getGradesList from '../../services/getGrades';
import MessageBadge from '../utilities/messageBadge';

const GradeForm = () => {
  const studentsList = useSelector((state) => (state.students.students));
  // const coursesList = useSelector((state) => (state.courses.courses));
  const coursesStudent = useSelector((state) => (state.grades.grades));
  const [student, setStudent] = useState('');
  const [course, setCourse] = useState('');
  const [type, setType] = useState('info');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudentsList());
  }, []);
  useEffect(() => {
    dispatch(getGradesList('student', student));
  }, [student]);
  const showError = (message) => {
    setType('error');
    setMessage(message);
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };
  const showInfo = (message) => {
    setType('info');
    setMessage(message);
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };
  const onGrade = async (e) => {
    e.preventDefault();
    const url = 'http://127.0.0.1:3001/grades';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: `{"student_id":"${student}","course_id":"${course}"}`,
      });
      if (response.status === 422) {
        showError('Student already enroll');
      } else {
        showInfo('Enroll successfully');
      }
    } catch (e) {
      showError('Something went wrong');
    }
  };
  const onStudent = (e) => {
    setStudent(() => e.target.value);
  };
  const onCourse = (e) => {
    setCourse(() => (e.target.value));
  };
  return (

    <>
      <h1 className="text-centered">
        Grading
      </h1>
      <form className="flex column m-t-4-auto w-30" onSubmit={onGrade}>
        <div className="field">
          <label htmlFor="student">
            <select id="student" value={student} onChange={onStudent}>
              {
                studentsList.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.id}
                    -
                    {student.name}
                  </option>
                ))
              }
            </select>
          </label>
          <label htmlFor="course">
            <select id="course" value={course} onChange={onCourse}>
              {
                coursesStudent.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.id}
                    -
                    {course.name}
                  </option>
                ))
              }
            </select>
          </label>
          <input type="submit" value="Enroll" className="btn" />
        </div>
      </form>
      <MessageBadge message={message} type={type} />
    </>
  );
};

export default GradeForm;

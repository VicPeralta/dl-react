import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getStudentsList from '../../services/getStudents';
import getGradesList from '../../services/getGrades';
import MessageBadge from '../utilities/messageBadge';

const GradeForm = () => {
  const studentsList = useSelector((state) => (state.students.students));
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
  const onQuarter = (e) => {
    setCourse((prev) => {
      const temp = { ...prev };
      temp[e.target.id] = e.target.value;
      return temp;
    });
  };

  const onGrade = async (e) => {
    e.preventDefault();
    const url = `http://127.0.0.1:3001/grades/${course.id}`;
    const jsonQ1 = course.q1 ? `"q1":"${course.q1}"` : '';
    const jsonQ2 = course.q2 ? `,"q2":"${course.q2}"` : '';
    const jsonQ3 = course.q3 ? `,"q3":"${course.q3}"` : '';
    const jsonQ4 = course.q4 ? `,"q4":"${course.q4}"` : '';
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: `{
        ${jsonQ1}
        ${jsonQ2}
        ${jsonQ3}
        ${jsonQ4}
        }`,
      });
      if (response.status === 422) {
        showError('Incorrect data try again');
      } else {
        showInfo('Grades updated successfully');
      }
    } catch (e) {
      showError('Something went wrong');
    }
  };
  const onStudent = (e) => {
    setStudent(() => e.target.value);
  };
  const onCourse = (e) => {
    setCourse(() => coursesStudent.find((grade) => grade.id === Number(e.target.value)));
  };
  return (
    <>
      <h1 className="text-centered">
        Grading
      </h1>
      <form className="flex column m-t-4-auto w-30" onSubmit={onGrade}>
        <div className="field">
          <label htmlFor="student">
            Student
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
            Course
            <select id="course" value={course.id} onChange={onCourse}>
              {
                coursesStudent.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.course_id}
                    -
                    {course.name}
                  </option>
                ))
              }
            </select>
          </label>
          <label htmlFor="q1">
            Q1
            <input type="number" id="q1" min={0} max={10} value={course.q1 || ''} onChange={onQuarter} />
          </label>
          <label htmlFor="q2">
            Q2
            <input type="number" id="q2" min={0} max={10} value={course.q2 || ''} onChange={onQuarter} />
          </label>
          <label htmlFor="q3">
            Q3
            <input type="number" id="q3" min={0} max={10} value={course.q3 || ''} onChange={onQuarter} />
          </label>
          <label htmlFor="q4">
            Q4
            <input type="number" id="q4" min={0} max={10} value={course?.q4 || ''} onChange={onQuarter} />
          </label>
          <input type="submit" value="Update grades" className="btn" />
        </div>
      </form>
      <MessageBadge message={message} type={type} />
    </>
  );
};

export default GradeForm;

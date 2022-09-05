import { useState } from 'react';
import Form from '../components/forms/form';
import Enroll from '../components/forms/enroll';
import GradeForm from '../components/forms/grade';

const MaintenancePage = () => {
  const btnsValues = {
    students: true, courses: false, enroll: false, grades: false,
  };
  const [values, setValues] = useState(btnsValues);
  const onClick = (e) => {
    switch (e.target.id) {
      case 'courses':
        setValues(() => ({
          students: false, courses: true, enroll: false, grades: false,
        }));
        break;
      case 'enroll':
        setValues(() => ({
          students: false, courses: false, enroll: true, grades: false,
        }));
        break;
      case 'grades':
        setValues(() => ({
          students: false, courses: false, enroll: false, grades: true,
        }));
        break;
      default:
        setValues(() => ({
          students: true, courses: false, enroll: false, grades: false,
        }));
    }
  };
  return (
    <>
      <div className="container">
        <button type="button" onClick={onClick} id="students" className="btn m-1">
          Students
        </button>
        <button type="button" onClick={onClick} id="courses" className="btn m-1">
          Courses
        </button>
        <button type="button" onClick={onClick} id="enroll" className="btn m-1">
          Enroll
        </button>
        <button type="button" onClick={onClick} id="grades" className="btn m-1">
          Grades
        </button>
      </div>
      {values.students && <Form url="http://127.0.0.1:3001/students/" title="Student" />}
      {values.courses && <Form url="http://127.0.0.1:3001/courses/" title="Course" />}
      {values.enroll && <Enroll />}
      {values.grades && <GradeForm />}
    </>
  );
};

export default MaintenancePage;

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Form from '../components/forms/form';
import Enroll from '../components/forms/enroll';
import GradeForm from '../components/forms/grade';

const MaintenancePage = () => {
  const module = useSelector((state) => (state.appConfig.maintenance));
  const btnsValues = {
    students: true, courses: false, enroll: false, grades: false,
  };
  const [values, setValues] = useState(btnsValues);
  useEffect(() => {
    switch (module) {
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
  }, [module]);
  return (
    <>
      {values.students && <Form url="http://127.0.0.1:3001/students/" title="Student" />}
      {values.courses && <Form url="http://127.0.0.1:3001/courses/" title="Course" />}
      {values.enroll && <Enroll />}
      {values.grades && <GradeForm />}
    </>
  );
};

export default MaintenancePage;

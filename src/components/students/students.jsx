import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StudentList from './studentList';
import getStudentsList from '../../services/getStudents';

const Students = () => {
  const studentsList = useSelector((state) => (state.students.students));
  const fetching = useSelector((state) => (state.students.fetching));
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getStudentsList()); }, []);
  return (
    <>
      {!fetching && studentsList.length > 0 && (
        <StudentList students={studentsList} />
      )}
      {!fetching && studentsList.length === 0 && (
        <h3>Something went wrong while fetching the data.</h3>
      )}
      {fetching && (
        <h3>Fetching data please wait...</h3>
      )}
    </>
  );
};

export default Students;

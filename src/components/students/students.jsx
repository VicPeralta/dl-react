import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StudentList from './studentList';
import getStudentsList from '../../services/getStudents';
import Message from '../utilities/message';

const Students = () => {
  const studentsList = useSelector((state) => (state.students.students));
  const token = useSelector((state) => (state.user.token));
  const fetching = useSelector((state) => (state.students.fetching));
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getStudentsList(token)); }, []);
  return (
    <>
      {!fetching && studentsList.length > 0 && (
        <StudentList students={studentsList} />
      )}
      {!fetching && studentsList.length === 0 && (
        <Message message="There is no information available" />
      )}
      {fetching && (
        <Message message="Fetching data please wait" />
      )}
    </>
  );
};

export default Students;

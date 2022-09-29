import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseList from './courseList';
import getCoursesList from '../../services/getCourses';
import Message from '../utilities/message';

const Courses = () => {
  const coursesList = useSelector((state) => (state.courses.courses));
  const token = useSelector((state) => (state.user.token));
  const fetching = useSelector((state) => (state.courses.fetching));
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getCoursesList(token)); }, []);
  return (
    <>
      {!fetching && coursesList.length > 0 && (
        <CourseList courses={coursesList} />
      )}
      {!fetching && coursesList.length === 0 && (
        <Message message="There is no information available" />
      )}
      {fetching && (
        <Message message="Fetching data please wait" />
      )}
    </>
  );
};

export default Courses;

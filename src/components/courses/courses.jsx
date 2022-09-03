import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseList from './courseList';
import getCoursesList from '../../services/getCourses';

const Courses = () => {
  const coursesList = useSelector((state) => (state.courses.courses));
  const fetching = useSelector((state) => (state.courses.fetching));
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getCoursesList()); }, []);
  return (
    <>
      {!fetching && coursesList.length > 0 && (
        <CourseList courses={coursesList} />
      )}
      {!fetching && coursesList.length === 0 && (
        <h3>Something went wrong while fetching the data.</h3>
      )}
      {fetching && (
        <h3>Fetching data please wait...</h3>
      )}
    </>
  );
};

export default Courses;

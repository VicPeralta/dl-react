import PropTypes from 'prop-types';
import CourseCard from './courseCard';

const CourseList = ({ courses }) => (
  <div className="container">
    <div className="flex border-gray px-1 w-100 font-size-12 font-bold">
      <p className="w-30">Course-id</p>
      <p>Course-name</p>
    </div>
    {courses.map((course) => (
      <CourseCard key={course.id} id={course.id} name={course.name} />
    )) }
  </div>
);

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default CourseList;

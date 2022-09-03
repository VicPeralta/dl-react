import PropTypes from 'prop-types';
import GradeCard from './gradeCard';

const GradesList = ({ grades }) => (
  <div className="container">
    <div className="flex border-gray px-1 w-100 font-size-12 font-bold">
      <p className="w-30">Course-id</p>
      <p>Course-name</p>
    </div>
    {grades.map((grade) => (
      <GradeCard key={grade.id} studentId={grade.student_id} courseId={grade.course_id} />
    ))}
  </div>
);

GradesList.propTypes = {
  grades: PropTypes.arrayOf(PropTypes.shape({
    student_id: PropTypes.string.isRequired,
    course_id: PropTypes.string.isRequired,
    q1: PropTypes.string,
    q2: PropTypes.string,
    q3: PropTypes.string,
    q4: PropTypes.string,
  })).isRequired,
};

export default GradesList;

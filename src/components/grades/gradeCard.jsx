import PropTypes from 'prop-types';

const GradeCard = ({
  studentId, courseId, q1, q2, q3, q4,
}) => (
  <div className="flex border-gray p-1 w-100 align-items">
    <p className="flex-1">
      {studentId}
    </p>
    <p className="flex-1">
      {courseId}
    </p>
    <p className="flex-1">
      {q1 || 'N/A'}
    </p>
    <p className="flex-1">
      {q2 || 'N/A'}
    </p>
    <p className="flex-1">
      {q3 || 'N/A'}
    </p>
    <p className="flex-1">
      {q4 || 'N/A'}
    </p>
  </div>
);

GradeCard.propTypes = {
  studentId: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
  q1: PropTypes.string.isRequired,
  q2: PropTypes.string.isRequired,
  q3: PropTypes.string.isRequired,
  q4: PropTypes.string.isRequired,
};
export default GradeCard;

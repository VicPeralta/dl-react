import PropTypes from 'prop-types';

const GradeCard = ({ grade, type }) => (
  <div className="flex border-gray p-1 w-100 align-items m-1">
    <p className="flex-1">
      {type !== 'student' ? grade.student_id : grade.course_id}
    </p>
    {type === 'all'
      ? (
        <p className="flex-1">
          {grade.course_id}
        </p>
      ) : ''}
    {type !== 'all'
      ? (
        <p className="flex-1">
          {grade.name}
        </p>
      ) : ''}
    <p className="flex-1">
      {grade.q1}
      <span> - </span>
      {grade.rq1}
    </p>
    <p className="flex-1">
      {grade.q2}
      <span> - </span>
      {grade.rq2}
    </p>
    <p className="flex-1">
      {grade.q3}
      <span> - </span>
      {grade.rq3}
    </p>
    <p className="flex-1">
      {grade.q4}
      <span> - </span>
      {grade.rq4}
    </p>
    <p className="flex-1">
      {grade.rf}
    </p>
  </div>
);

GradeCard.propTypes = {
  grade: PropTypes.arrayOf(PropTypes.shape({
    student_id: PropTypes.string.isRequired,
    course_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    q1: PropTypes.number,
    q2: PropTypes.number,
    q3: PropTypes.number,
    q4: PropTypes.number,
    rq1: PropTypes.string.isRequired,
    rq2: PropTypes.string.isRequired,
    rq3: PropTypes.string.isRequired,
    rq4: PropTypes.string.isRequired,
    rf: PropTypes.string.isRequired,
  })).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default GradeCard;

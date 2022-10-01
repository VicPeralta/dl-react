import PropTypes from 'prop-types';
import GradeCard from './gradeCard';

const GradesList = ({
  grades, id, name, type,
}) => (
  <div className="wide-container p-1">
    <h1>
      {name}
    </h1>
    <div className="flex border-gray px-1 m-1 w-100 font-size-12 font-bold">
      {type === 'all' ? <p className="flex-1">Student Id </p> : ''}
      {type === 'all' ? <p className="flex-1">Course Id </p> : ''}
      {type !== 'all' ? <p className="flex-1">Id </p> : ''}
      {type !== 'all' ? <p className="flex-1">Name</p> : ''}
      <p className="flex-1">Q1</p>
      <p className="flex-1">Q2</p>
      <p className="flex-1">Q3</p>
      <p className="flex-1">Q4</p>
      <p className="flex-1">Final</p>
    </div>
    {grades.map((grade) => (
      <GradeCard
        key={grade.id}
        grade={grade}
        name={name}
        id={id}
        type={type}
      />
    ))}
  </div>
);

GradesList.propTypes = {
  grades: PropTypes.arrayOf(PropTypes.shape({
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
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
};

GradesList.defaultProps = {
  name: '',
  id: '',
};

export default GradesList;

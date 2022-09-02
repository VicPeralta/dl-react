import PropTypes from 'prop-types';
import StudentCard from './studentCard';

const StudentList = ({ students }) => (
  <div className="container">
    <div className="flex border-gray px-1 w-100 font-size-12 font-bold">
      <p className="w-30">Student-id</p>
      <p>Student-name</p>
    </div>
    {students.map((student) => (
      <StudentCard key={student.id} id={student.id} name={student.name} />
    )) }
  </div>
);

StudentList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default StudentList;

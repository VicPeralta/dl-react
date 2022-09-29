import PropTypes from 'prop-types';
import StudentCard from './studentCard';

const StudentList = ({ students }) => (
  <div className="container m-t-4-auto">
    <div className="flex border-gray px-1 w-100 font-size-12 font-bold">
      <p className="flex-1">Student-id</p>
      <p className="flex-2">Student-name</p>
      <p className="flex-1" />
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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import GradesList from './gradesList';
import getGradesList from '../../services/getGrades';

const Grades = ({ type, id }) => {
  const gradesList = useSelector((state) => (state.grades.grades));
  const fetching = useSelector((state) => (state.grades.fetching));
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getGradesList(type, id)); }, []);
  return (
    <>
      {!fetching && gradesList.length > 0 && (
        <GradesList grades={gradesList} />
      )}
      {!fetching && gradesList.length === 0 && (
        <h3>Something went wrong while fetching the data.</h3>
      )}
      {fetching && (
        <h3>Fetching data please wait...</h3>
      )}
    </>
  );
};

Grades.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Grades;

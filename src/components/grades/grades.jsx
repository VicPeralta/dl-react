import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import GradesList from './gradesList';
import getGradesList from '../../services/getGrades';
import Message from '../utilities/message';

const Grades = ({ type, id, name }) => {
  const gradesList = useSelector((state) => (state.grades.grades));
  const fetching = useSelector((state) => (state.grades.fetching));
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getGradesList(type, id)); }, []);
  return (
    <>
      {!fetching && gradesList.length > 0 && (
        <GradesList grades={gradesList} id={id} name={name} type={type} />
      )}
      {!fetching && gradesList.length === 0 && (
        <Message message="There is no information available" />
      )}
      {fetching && (
        <Message message="Fetching data please wait" />
      )}
    </>
  );
};

Grades.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Grades;

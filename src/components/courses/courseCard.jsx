import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import Grades from '../grades/grades';

const CourseCard = ({ id, name }) => (
  <div className="flex border-gray p-1 w-100 align-center flex-wrap">
    <p className="flex-1">
      {id}
    </p>
    <p className="flex-2">
      {name}
    </p>
    <div className="flex-1">
      <Popup
        trigger={<button type="button" className="btn"> See students </button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal bg-white h-80vh w-90vw shadow-2 scroll">
            <button className="close-btn" onClick={close} type="button">
              &times;
            </button>
            <Grades type="courses" id={id} name={name} />
          </div>
        )}
      </Popup>
    </div>
  </div>
);

CourseCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default CourseCard;

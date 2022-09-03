import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import Grades from '../grades/grades';

const StudentCard = ({ id, name }) => (
  <div className="flex border-gray p-1 w-100 align-items">
    <p className="flex-1">
      {id}
    </p>
    <p className="flex-2">
      {name}
    </p>
    <div className="flex-1">
      <Popup
        trigger={<button type="button"> See courses </button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal bk-white h-80vh w-90vw">
            <button className="close" onClick={close} type="button">
              &times;
            </button>
            <Grades type="student" id={id} />
          </div>
        )}
      </Popup>
    </div>
  </div>
);

StudentCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default StudentCard;

import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

const Title = () => (<h1>This is the title</h1>);
const CourseCard = ({ id, name }) => (
  <div className="flex border-gray p-1 w-100 align-items">
    <p className="flex-1">
      {id}
    </p>
    <p className="flex-2">
      {name}
    </p>
    <div className="flex-1">
      <Popup
        trigger={<button type="button"> See students </button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal bk-white container h-80vh">
            <button className="close" onClick={close} type="button">
              &times;
            </button>
            <Title />
            <div className="content">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
              Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
              delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
              commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
              explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
            </div>
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

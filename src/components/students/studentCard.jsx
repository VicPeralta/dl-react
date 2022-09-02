import PropTypes from 'prop-types';
import { createElement } from 'react';

const h1 = () => (<h1>Hello</h1>);

const StudentCard = ({ id, name }) => {
  const onCourses = (e) => {
    const body = document.querySelector('body');
    const child = createElement(h1);
    body.appendChild(child);
    console.log(e.target.dataset.id);
  };
  return (
    <div className="flex border-gray p-1 w-100 align-items">
      <p className="flex-1">
        {id}
      </p>
      <p className="flex-2">
        {name}
      </p>
      <div className="flex-1">
        <button
          type="button"
          className="p-1"
          data-id={id}
          onClick={onCourses}
        >
          See courses
        </button>
      </div>
    </div>
  );
};

StudentCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default StudentCard;

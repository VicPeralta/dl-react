import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <div className="container">
    <p>{message}</p>
  </div>
);
Message.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Message;

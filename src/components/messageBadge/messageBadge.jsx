import PropTypes from 'prop-types';

const MessageBadge = ({ message, type }) => (
  <div className={type === 'info' ? 'badge bg-green white' : 'badge bg-red white'}>
    {message}
  </div>
);

MessageBadge.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MessageBadge;

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import MessageBadge from '../utilities/messageBadge';

const Form = ({ url, title }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('info');
  const token = useSelector((state) => (state.user.token));
  const onChangeId = (e) => {
    setId(() => (e.target.value));
  };
  const onChangeName = (e) => {
    setName(() => (e.target.value));
  };
  const showError = (message) => {
    setType('error');
    setMessage(message);
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };
  const showInfo = (message) => {
    setType('info');
    setMessage(message);
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // const url = 'http://127.0.0.1:3001/students/';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: `{"id":"${id}","name":"${name}"}`,
      });
      if (response.status === 422) {
        showError('ID is already taken');
      } else {
        showInfo('Added successfully');
      }
      setId('');
      setName('');
    } catch (e) {
      showError('Something went wrong');
    }
  };
  return (
    <>
      <h1 className="text-centered">
        Adding a
        <span>  </span>
        {title}
      </h1>
      <form onSubmit={onSubmit} className="flex column m-t-4-auto w-30">
        <div className="field">
          <label htmlFor="Id">
            {`${title}-Id:`}
            <input
              id="Id"
              type="text"
              value={id}
              onChange={onChangeId}
              maxLength="10"
              minLength="3"
              required
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="name">
            Name:
            <input
              id="name"
              type="text"
              value={name}
              onChange={onChangeName}
              maxLength="50"
              minLength="3"
              required
            />
          </label>
        </div>
        <input type="submit" value="Submit" className="btn" />
      </form>
      <MessageBadge message={message} type={type} />
    </>
  );
};

Form.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Form;

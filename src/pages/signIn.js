import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import MessageBadge from '../components/utilities/messageBadge';
import { loginBegin, loginSuccess, loginError } from '../app/userSlice';
import { saveUserToStorage } from '../services/getUser';

const SignIn = ({ onSuccess }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('info');
  const [message, setMessage] = useState('');
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

  const onLogin = async (e) => {
    const url = 'http://127.0.0.1:3001/user';
    e.preventDefault();
    try {
      dispatch(loginBegin());
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: `{"id":"${id}","password":"${password}"}`,
      });
      if (response.status === 401) {
        showError('Invalid credentials');
        dispatch(loginError);
      } else {
        const json = await response.json();
        const { token } = json;
        dispatch(loginSuccess({ id, token }));
        saveUserToStorage(id, token);
        showInfo('SigIn successfully');
        onSuccess();
      }
      setId('');
      setPassword('');
    } catch {
      showError('Something went wrong');
    }
  };
  const onChangeId = (e) => {
    setId(() => (e.target.value));
  };
  const onChangePassword = (e) => {
    setPassword(() => (e.target.value));
  };
  return (
    <div className="container">
      <h1 className="text-centered">
        Sign In
      </h1>
      <form onSubmit={onLogin} className="flex column m-t-4-auto w-30">
        <div className="field">
          <label htmlFor="Id">
            User Id:
            <input
              id="Id"
              type="text"
              value={id}
              onChange={onChangeId}
              maxLength="50"
              minLength="3"
              required
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              value={password}
              onChange={onChangePassword}
              maxLength="50"
              minLength="6"
              required
            />
          </label>
        </div>
        <input type="submit" value="Submit" className="btn" />
      </form>
      <MessageBadge message={message} type={type} />
    </div>
  );
};
SignIn.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};
export default SignIn;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import MessageBadge from '../messageBadge/messageBadge';
import { loginBegin, loginSuccess, loginError } from '../../app/userSlice';
import { saveUserToStorage } from '../../services/getUser';
import './login.css';

const SignUp = ({ onSuccess }) => {
  const loginEndPoint = 'http://127.0.0.1:3001/user';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [badgeType, setBadgeType] = useState('info');
  const [badgeMessage, setBadgeMessage] = useState('');
  const onLogin = () => {
    onSuccess(false);
  };
  const showBadgeInfo = (message, type = 'info') => {
    setBadgeType(type);
    setBadgeMessage(message);
    setTimeout(() => {
      setBadgeMessage('');
    }, 2000);
  };
  const onSignUp = async (event) => {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        showBadgeInfo('Password mismatch', 'error');
        setConfirmPassword('');
        return;
      }
      dispatch(loginBegin());
      const response = await fetch(loginEndPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: `{"id":"${userEmail}","password":"${password}"}`,
      });
      if (response.status === 401) {
        showBadgeInfo('Invalid credentials', 'error');
        dispatch(loginError);
      } else {
        const json = await response.json();
        const { token } = json;
        dispatch(loginSuccess({ id: userEmail, token }));
        saveUserToStorage(userEmail, token);
        showBadgeInfo('SigIn successfully');
        onSuccess(true);
        navigate('/');
      }
      setUserEmail('');
      setPassword('');
    } catch {
      showBadgeInfo('Something went wrong', 'error');
    }
  };
  return (
    <div className="container">
      <h1 className="text-centered sm-1">
        SignUp
      </h1>
      <form onSubmit={onSignUp} className="form-login">
        <div className="login-field">
          <label htmlFor="Id">
            User name or user email:
            <br />
            <input
              id="Id"
              type="text"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              maxLength="50"
              minLength="3"
              required
            />
          </label>
        </div>
        <div className="login-field">
          <label htmlFor="password">
            Password:
            <br />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength="50"
              minLength="6"
              required
            />
          </label>
        </div>
        <div className="login-field">
          <label htmlFor="password">
            Confirm password:
            <br />
            <input
              id="password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              maxLength="50"
              minLength="6"
              required
            />
          </label>
        </div>
        <input type="submit" value="Submit" className="btn" />
      </form>
      <MessageBadge message={badgeMessage} type={badgeType} />
      <div className="container flex justify-center">
        <button type="button" className="link" onClick={(onLogin)}>
          Login
        </button>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default SignUp;

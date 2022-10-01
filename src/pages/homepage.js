import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LogIn from '../components/logIn-signUp/logIn';
import logo from '../assets/school.png';
import SignUp from '../components/logIn-signUp/signUp';

function Homepage({ loginSuccessful }) {
  const [loginForm, setForm] = useState(true);
  const handleLogin = (login) => {
    if (login) {
      loginSuccessful();
      return;
    }
    setForm(!loginForm);
  };
  return (
    <>
      <div className="text-centered">
        <h1>Welcome to School grading system</h1>
        <img src={logo} alt="School logo" className="w-100px" />
      </div>
      {loginForm && (<LogIn onSuccess={handleLogin} />)}
      {!loginForm && (<SignUp onSuccess={handleLogin} />)}
    </>
  );
}

Homepage.propTypes = {
  loginSuccessful: PropTypes.func.isRequired,
};

export default Homepage;

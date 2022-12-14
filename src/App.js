import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppRoutes from './components/utilities/appRoutes';
import NavBar from './components/navbar/navbar';
import Homepage from './pages/homepage';
import getUserFromStorage from './services/getUser';
import { setUser } from './app/userSlice';
import './App.css';

function App() {
  let user = getUserFromStorage();
  const dispatch = useDispatch();
  const [logged, setLogged] = useState(!(user === null));
  if (user) {
    dispatch(setUser(user));
  }
  const loginSuccessful = () => {
    setLogged(true);
    user = getUserFromStorage();
  };
  return (
    <>
      {logged && user ? (
        <>
          <Router>
            <NavBar />
            <AppRoutes />
          </Router>
        </>
      )
        : (
          <>
            <Router>
              <Homepage loginSuccessful={loginSuccessful} />
            </Router>
          </>
        )}
    </>
  );
}

export default App;

import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { destroySession } from '../services/getUser';

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    destroySession();
    navigate('/');
    window.location.reload();
  });
  return (
    <p> Login out...</p>
  );
};

export default Logout;

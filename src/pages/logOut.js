import { useEffect } from 'react';
import { destroySession } from '../services/getUser';

const Logout = () => {
  useEffect(() => {
    destroySession();
    window.location.reload();
  });
  return (
    <p> Login out...</p>
  );
};

export default Logout;

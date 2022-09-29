const getUserFromStorage = () => (JSON.parse(localStorage.getItem('user')));
const destroySession = () => (localStorage.removeItem('user'));
const saveUserToStorage = (id, token) => {
  const user = {
    id,
    token,
  };
  localStorage.setItem('user',
    JSON.stringify(user));
};
export { saveUserToStorage, destroySession };
export default getUserFromStorage;

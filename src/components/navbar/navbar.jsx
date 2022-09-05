import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/school.png';
import './navbar.css';

const links = [
  {
    id: 1,
    path: '/students',
    text: 'Students',
  },
  {
    id: 2,
    path: '/courses',
    text: 'Courses',
  },
  {
    id: 3,
    path: '/grades',
    text: 'Grades',
  },
  {
    id: 4,
    path: '/maintenance',
    text: 'Maintenance',
  },
  {
    id: 5,
    path: '/logout',
    text: 'Logout',
  },
];

const NavBar = () => {
  const user = useSelector((state) => (state.user.id));
  return (
    <header>
      <nav className="flex align-center p-1 m-1 shadow-1 space-around">
        <div className="header flex gap-2">
          <img src={logo} alt="school logo" />
          <h1 className="margin-0 font-size-3">School grade system</h1>
        </div>
        <div className="navlinks flex">
          {
            links.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
              >
                {link.text}
              </NavLink>
            ))
          }
        </div>
      </nav>
      <p>
        {`Welcome ${user}`}
      </p>
    </header>
  );
};

export default NavBar;

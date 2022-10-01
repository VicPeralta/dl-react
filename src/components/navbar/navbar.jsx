import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import SubMenu from '../subMenu/subMenu';
import logo from '../../assets/school.png';
import { updateMaintenance } from '../../app/appConfigSlice';
import './navbar.css';

const NavBar = () => {
  const user = useSelector((state) => (state.user.id));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateTo = (e) => {
    dispatch(updateMaintenance(e.target.dataset.id));
    navigate('/maintenance');
  };
  return (
    <header>
      <nav className="flex align-center p-1 m-1 shadow-1 space-around">
        <div className="header flex gap-2">
          <img src={logo} alt="school logo" />
          <h1 className="margin-0 sm-1">School grade system</h1>
        </div>
        <div>
          <p className="m-0">
            Welcome&nbsp;
            <span className="green">
              {user}
            </span>
          </p>
          <div className="navlinks flex">
            <NavLink className="link" to="/students">Students</NavLink>
            <NavLink className="link" to="/courses">Courses</NavLink>
            <NavLink className="link" to="/grades">Grades</NavLink>
            <SubMenu className="link p-7">
              <button type="button" data-id="students" onClick={navigateTo}>Students</button>
              <button type="button" data-id="courses" onClick={navigateTo}>Courses</button>
              <button type="button" data-id="grades" onClick={navigateTo}>Grades</button>
              <button type="button" data-id="enroll" onClick={navigateTo}>Enroll</button>
            </SubMenu>
            <NavLink className="link" to="/logout">Logout</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

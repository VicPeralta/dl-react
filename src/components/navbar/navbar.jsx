import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSettings } from 'react-icons/fi';
import { IoLogOut, IoOptionsSharp } from 'react-icons/io5';
import { BsGrid3X3, BsFillGrid1X2Fill, BsGrid1X2 } from 'react-icons/bs';
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
  const onHamburger = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('show');
  };
  const onClick = (e) => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (e.target === mobileMenu || e.target.classList.contains('link')) {
      mobileMenu.classList.toggle('show');
    }
  };
  const onKey = (e) => {
    if (e.code === 'Escape') {
      const mobileMenu = document.getElementById('mobile-menu');
      if (e.target === mobileMenu || e.target.classList.contains('link')) {
        mobileMenu.classList.toggle('show');
      }
    }
  };
  return (
    <header>
      <nav className="flex align-center p-1 m-1 shadow-1 space-around">
        <div className="header flex gap-2">
          <img src={logo} alt="school logo" />
          <h1 className="margin-0 sm-1">School grade system</h1>
          <button type="button" className="hambuger-btn" aria-label="hamburger menu" onClick={onHamburger}><GiHamburgerMenu /></button>
        </div>
        <div>
          <p className="m-0">
            Welcome&nbsp;
            <span className="green">
              {user}
            </span>
          </p>
          <div className="flex">
            <div className="navlinks">
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
            <div className="mobile-menu" id="mobile-menu" role="presentation" onClick={onClick} onKeyDown={onKey}>
              <div className="mobile-options">
                <div className="mobile-header">
                  <img src={logo} alt="school logo" />
                  <h1 className="margin-0 sm-1">School grade system</h1>
                </div>
                <div className="mobile-links">
                  <div className="link-option">
                    <BsFillGrid1X2Fill />
                    <NavLink className="link" to="/students">Students</NavLink>
                  </div>
                  <div className="link-option">
                    <BsGrid1X2 />
                    <NavLink className="link" to="/courses">Courses</NavLink>
                  </div>
                  <div className="link-option">
                    <BsGrid3X3 />
                    <NavLink className="link" to="/grades">Grades</NavLink>
                  </div>
                  <div className="link-option">
                    <FiSettings />
                    <p className="link m-0">Maintenance</p>
                  </div>
                  <div className="flex column text-centered ml-20">
                    <div className="link-option">
                      <IoOptionsSharp />
                      <button type="button" data-id="students" onClick={navigateTo} className="link">Students</button>
                    </div>
                    <div className="link-option">
                      <IoOptionsSharp />
                      <button type="button" data-id="courses" onClick={navigateTo} className="link">Courses</button>
                    </div>
                    <div className="link-option">
                      <IoOptionsSharp />
                      <button type="button" data-id="grades" onClick={navigateTo} className="link">Grades</button>
                    </div>
                    <div className="link-option">
                      <IoOptionsSharp />
                      <button type="button" data-id="enroll" onClick={navigateTo} className="link">Enroll</button>
                    </div>
                  </div>
                  <div className="link-option">
                    <IoLogOut />
                    <NavLink className="link" to="/logout">Logout</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

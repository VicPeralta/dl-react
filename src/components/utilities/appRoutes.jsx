import { Route, Routes } from 'react-router-dom';
import StudentPage from '../../pages/students';
import CoursesPage from '../../pages/courses';
import GradesPage from '../../pages/grades';
import MaintenancePage from '../../pages/maintenance';
import Logout from '../../pages/logOut';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<StudentPage />} />
    <Route path="/students" element={<StudentPage />} />
    <Route path="/courses" element={<CoursesPage />} />
    <Route path="/grades" element={<GradesPage />} />
    <Route path="/maintenance" element={<MaintenancePage />} />
    <Route path="/logout" element={<Logout />} />
  </Routes>
);

export default AppRoutes;

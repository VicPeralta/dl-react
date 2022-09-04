import Form from '../components/forms/form';
import Enroll from '../components/forms/enroll';

const MaintenancePage = () => (
  <>
    <Form url="http://127.0.0.1:3001/students/" title="Student" />
    <Form url="http://127.0.0.1:3001/courses/" title="Course" />
    <Enroll />
  </>
);

export default MaintenancePage;

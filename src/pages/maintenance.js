import Form from '../components/forms/form';
import Enroll from '../components/forms/enroll';
import GradeForm from '../components/forms/grade';

const MaintenancePage = () => (
  <>
    <Form url="http://127.0.0.1:3001/students/" title="Student" />
    <Form url="http://127.0.0.1:3001/courses/" title="Course" />
    <Enroll />
    <GradeForm />
  </>
);

export default MaintenancePage;

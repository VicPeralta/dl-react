import { useState } from 'react';
import MessageBadge from '../utilities/messageBadge';

const FormStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('info');
  const onChangeId = (e) => {
    setStudentId(() => (e.target.value));
  };
  const onChangeName = (e) => {
    setStudentName(() => (e.target.value));
  };
  const showError = () => {
    setType('error');
    setMessage('Somenting went wrong ');
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };
  const showInfo = (message) => {
    setType('info');
    setMessage(message);
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://127.0.0.1:3001/students/';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: `{"id":"${studentId}","name":"${studentName}"}`,
      });
      if (response.status !== 201) {
        showError();
      } else {
        showInfo('Student added successfully');
      }
      setStudentId('');
      setStudentName('');
    } catch (e) {
      showError();
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className="flex column container">
        <div className="field">
          <label htmlFor="studentId">
            Student-Id:
            <input
              id="studentId"
              type="text"
              value={studentId}
              onChange={onChangeId}
              maxLength="10"
              minLength="3"
              required
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="student">
            Name:
            <input
              id="student"
              type="text"
              value={studentName}
              onChange={onChangeName}
              maxLength="50"
              minLength="3"
              required
            />
          </label>
        </div>
        <input type="submit" value="Submit" className="btn" />
      </form>
      <MessageBadge message={message} type={type} />
    </>
  );
};

export default FormStudent;

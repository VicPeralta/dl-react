import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import StudentPage from './pages/students';
import CoursesPage from './pages/courses';
import GradesPage from './pages/grades';
import MaintenancePage from './pages/maintenance';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<StudentPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/grades" element={<GradesPage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
      </Routes>
    </div>
  );
}

export default App;

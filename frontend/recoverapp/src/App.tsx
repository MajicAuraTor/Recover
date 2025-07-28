import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/dashboard/LoginForm';
import DashboardPage from './pages/dashboard/DashboardPage';
import NotFound from './pages/NotFound';
import CrudPage from './pages/crud/CrudPage';
// import { useTheme } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/crud" element={<CrudPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

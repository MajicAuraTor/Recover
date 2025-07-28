import { useState } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import BoxInfo from '../../components/dashboard/BoxInfo';
import SupplyLists from '../../components/dashboard/SupplyLists';
import RecentlyUploaded from '../../components/dashboard/RecentlyUploaded';
import DocumentsUploaded from '../../components/dashboard/DocumentsUploaded';
import ProcedureContent from '../../components/dashboard/ProcedureContent';
import Navbar from '../../components/dashboard/Navbar';
import './DashboardPage.css';
import "../../css/index.css";


function DashboardPage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <Sidebar />
      <div className="main-content">
        <Navbar />
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
         <BoxInfo />
        <RecentlyUploaded />
        <ProcedureContent />
        <DocumentsUploaded />
        <SupplyLists />
      </div>
    </div>
  );
}

export default DashboardPage;

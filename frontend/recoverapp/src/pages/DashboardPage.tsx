import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BoxInfo from '../components/BoxInfo';
import SupplyLists from '../components/SupplyLists';
import RecentlyUploaded from '../components/RecentlyUploaded'
import DocumentsUploaded from '../components/DocumentsUploaded';
import ProcedureContent from '../components/ProcedureContent';
import Navbar from '../components/Navbar'; 
import './DashboardPage.css';
import '../index.css';


function DashboardPage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      <Sidebar />
      <Navbar />
      <main className="main-content">
        
        <BoxInfo />

      <div className="dashboard-grid">
          <div>
           <RecentlyUploaded />
          </div>

          <div>
            <ProcedureContent />
          </div>

          <div>
           <DocumentsUploaded />
          </div>

          <div>
            <SupplyLists />
          </div>
      </div>
      </main>
      </div>
  );
}

export default DashboardPage;

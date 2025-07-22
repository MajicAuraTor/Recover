import React from 'react';
import '../index.css'; // Make sure this path is correct based on your file structure
import '../sidebar.css'; // Specific styles for this component

const Sidebar: React.FC = () => {
  const navItems = [
    { icon: '🏠', label: 'Dashboard' },
    { icon: '📄', label: 'Content' },
    { icon: '📦', label: 'Supply Lists' },
    { icon: '⚙️', label: 'Settings' },
    { icon: '🚪', label: 'Log Out', logout: true },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        RECOVER
        <br />
        <span className="sidebar-subtitle">by Medline</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ icon, label, logout }) => (
          <a
            key={label}
            href="#"
            className={`sidebar-link ${logout ? 'logout' : ''}`}
          >
            <span className="sidebar-icon">{icon}</span>
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
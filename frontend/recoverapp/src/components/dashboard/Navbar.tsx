import React from 'react';
import '../../css/navbar.css';

const DashboardNavbar: React.FC = () => (
  <header className="navbar">
    <div className="navbar-left">
      <h1>Good Morning, Ian Walters</h1>
      <p>Admin Dashboard</p>
    </div>
    <div className="navbar-right">
      <input type="text" placeholder="Search here" className="navbar-search" />
    </div>
  </header>
);

export default DashboardNavbar;

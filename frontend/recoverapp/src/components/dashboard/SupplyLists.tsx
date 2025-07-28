import React from 'react';
import "../../css/supplylists.css"; // Make sure this file exists in the same folder

const SupplyLists: React.FC = () => (
  <section className="supply-section">
    <h2 className="supply-title">Supply Lists Uploaded:</h2>
    <ul className="supply-list">
      <li><a href="#">Hip Replacement</a></li>
      <li><a href="#">Knee Replacement</a></li>
      <li><a href="#">Shoulder Surgery</a></li>
      <li><a href="#">Spinal Fusion</a></li>
    </ul>
  </section>
);

export default SupplyLists;


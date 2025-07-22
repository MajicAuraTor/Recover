import React from 'react';
import '../index.css';

const DocumentsUploaded: React.FC = () => (
  <section className="dashboard-box">
    <h3>Documents Uploaded:</h3>
    <ul>
      <li><a href="#">Symptom Tracker (Printout)</a></li>
      <li><a href="#">Medication Instructions (printout)</a></li>
    </ul>
  </section>
);

export default DocumentsUploaded;


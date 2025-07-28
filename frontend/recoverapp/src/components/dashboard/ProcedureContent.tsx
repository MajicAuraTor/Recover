import React from 'react';
import '../../css/index.css'; // Using global styles
import "../../css/procedurecontent.css"; // Specific styles for this component

const ProcedureContent: React.FC = () => {
  const items = [
    { label: 'Hip Replacement', status: 'Published' },
    { label: 'Knee Replacement', status: 'Published' },
    { label: 'Shoulder Surgery', status: 'Draft' },
    { label: 'Spinal Fusion', status: 'Published' },
  ];

  return (
    <section className="dashboard-box">
      <h3>Procedure Content:</h3>
      <ul className="procedure-list">
        {items.map((item, i) => (
          <li key={i}>
            <span className="procedure-label">{item.label}</span>
            <span className={`procedure-status ${item.status.toLowerCase()}`}>
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProcedureContent;

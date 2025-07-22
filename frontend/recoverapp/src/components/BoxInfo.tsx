import React from 'react';
import '../boxinfo.css'; // Make sure this file exists in the same folder

interface InfoBox {
  iconClass: string;
  value: string;
  label: string;
}

const boxes: InfoBox[] = [
  { iconClass: 'bx bxs-calendar-check', value: '1020', label: 'New Order' },
  { iconClass: 'bx bxs-group', value: '2834', label: 'Visitors' },
  { iconClass: 'bx bxs-dollar-circle', value: '$35,943', label: 'Total Sales' },
];

const BoxInfo: React.FC = () => (
  <ul className="box-info">
    {boxes.map((box, i) => (
      <li key={i}>
        <i className={box.iconClass} />
        <span className="text">
          <h3>{box.value}</h3>
          <p>{box.label}</p>
        </span>
      </li>
    ))}
  </ul>
);

export default BoxInfo;

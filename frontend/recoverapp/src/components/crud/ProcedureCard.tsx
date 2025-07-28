import React from 'react';
import { Edit, Trash2, Calendar, Tag, FileText } from 'lucide-react';
import type { Procedure } from '../../types/procedure';
import "../../pages/crud/crudpage.css";

interface ProcedureCardProps {
  procedure: Procedure;
  onEdit: (procedure: Procedure) => void;
  onDelete: (id: string) => void;
}

const ProcedureCard: React.FC<ProcedureCardProps> = ({ procedure, onEdit, onDelete }) => {
  const formatListItems = (items: string[], max: number = 2) => {
    if (items.length === 0) return 'None specified';
    if (items.length <= max) return items.join(', ');
    return `${items.slice(0, max).join(', ')} +${items.length - max} more`;
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active': return 'status-active';
      case 'Draft': return 'status-draft';
      case 'Archived': return 'status-archived';
      default: return 'status-draft';
    }
  };

  return (
    <div className="procedure-card">
      <div className="card-header">
        <div className="card-title-section">
          <div className="card-title">
            <h3>
              {procedure.title}
            </h3>
            <span className={`status-badge ${getStatusClass(procedure.status)}`}>
              {procedure.status}
            </span>
          </div>
          <div className="card-meta">
            <Tag size={14} />
            <span>{procedure.category}</span>
            <span className="card-meta-separator">•</span>
            <Calendar size={14} />
            <span>Updated {new Date(procedure.lastUpdated).toLocaleDateString()}</span>
          </div>
          <p className="card-id">
            ID: {procedure.id}
          </p>
        </div>
        
        <div className="card-actions">
          <button
            onClick={() => onEdit(procedure)}
            className="action-btn edit"
            title="Edit procedure"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => onDelete(procedure.id)}
            className="action-btn delete"
            title="Delete procedure"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="card-content">
        <div className="instruction-section">
          <h4 className="instruction-title">
            <FileText size={14} />
            Pre-Op Instructions
          </h4>
          <p className="instruction-text line-clamp-2">
            {procedure.preOpInstructions}
          </p>
        </div>

        <div className="card-details">
          <div className="detail-section">
            <h5>Medications</h5>
            <p>
              {formatListItems(procedure.medicationReminders)}
            </p>
          </div>
          <div className="detail-section">
            <h5>Exercises</h5>
            <p>
              {formatListItems(procedure.exerciseSchedule)}
            </p>
          </div>
          <div className="detail-section">
            <h5>Supplies</h5>
            <p>
              {formatListItems(procedure.supplyList)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureCard;
import React, { useState } from 'react';
import { Save, X } from 'lucide-react';
import type { Procedure } from '../../types/procedure';
import MultiInput from './MultiInput';

interface ProcedureFormProps {
  procedure?: Procedure;
  onSubmit: (procedure: Omit<Procedure, 'id' | 'lastUpdated' | 'createdAt'>) => void;
  onCancel: () => void;
}

const categories = [
  'Cardiovascular',
  'Orthopedic',
  'Neurological',
  'General Surgery',
  'Dermatological',
  'ENT',
  'Gynecological',
  'Urological',
  'Ophthalmological',
  'Plastic Surgery'
];

const ProcedureForm: React.FC<ProcedureFormProps> = ({ procedure, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: procedure?.title || '',
    category: procedure?.category || '',
    preOpInstructions: procedure?.preOpInstructions || '',
    postOpInstructions: procedure?.postOpInstructions || '',
    medicationReminders: procedure?.medicationReminders || [],
    exerciseSchedule: procedure?.exerciseSchedule || [],
    supplyList: procedure?.supplyList || [],
    status: procedure?.status || 'Draft' as const,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = 'Procedure title is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.preOpInstructions.trim()) newErrors.preOpInstructions = 'Pre-op instructions are required';
    if (!formData.postOpInstructions.trim()) newErrors.postOpInstructions = 'Post-op instructions are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="procedure-form">
      <div className="form-header">
        <h2 className="form-title">
          {procedure ? 'Edit Procedure' : 'Add New Procedure'}
        </h2>
        <button
          onClick={onCancel}
          className="close-btn"
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid lg-grid-cols-2 gap-6 mb-6">
          <div className="form-group">
            <label className="form-label">
              Procedure Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className={`form-input ${errors.title ? 'error' : ''}`}
              placeholder="Enter procedure name"
            />
            {errors.title && <p className="error-message">{errors.title}</p>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Category *
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
              className={`form-select ${errors.category ? 'error' : ''}`}
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            {errors.category && <p className="error-message">{errors.category}</p>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as 'Active' | 'Draft' | 'Archived' }))}
              className="form-select"
            >
              <option value="Draft">Draft</option>
              <option value="Active">Active</option>
              <option value="Archived">Archived</option>
            </select>
          </div>
        </div>

        <div className="grid lg-grid-cols-2 gap-6 mb-6">
          <div className="form-group">
            <label className="form-label">
              Pre-Op Instructions *
            </label>
            <textarea
              value={formData.preOpInstructions}
              onChange={(e) => setFormData(prev => ({ ...prev, preOpInstructions: e.target.value }))}
              rows={4}
              className={`form-textarea ${errors.preOpInstructions ? 'error' : ''}`}
              placeholder="Enter pre-operative instructions..."
            />
            {errors.preOpInstructions && <p className="error-message">{errors.preOpInstructions}</p>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Post-Op Instructions *
            </label>
            <textarea
              value={formData.postOpInstructions}
              onChange={(e) => setFormData(prev => ({ ...prev, postOpInstructions: e.target.value }))}
              rows={4}
              className={`form-textarea ${errors.postOpInstructions ? 'error' : ''}`}
              placeholder="Enter post-operative instructions..."
            />
            {errors.postOpInstructions && <p className="error-message">{errors.postOpInstructions}</p>}
          </div>
        </div>

        <div className="grid lg-grid-cols-3 gap-6 mb-6">
          <MultiInput
            label="Medication Reminders"
            values={formData.medicationReminders}
            onChange={(values) => setFormData(prev => ({ ...prev, medicationReminders: values }))}
            placeholder="Add medication reminder"
          />

          <MultiInput
            label="Exercise Schedule"
            values={formData.exerciseSchedule}
            onChange={(values) => setFormData(prev => ({ ...prev, exerciseSchedule: values }))}
            placeholder="Add exercise item"
          />

          <MultiInput
            label="Supply List"
            values={formData.supplyList}
            onChange={(values) => setFormData(prev => ({ ...prev, supplyList: values }))}
            placeholder="Add supply item"
          />
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="btn btn-primary"
          >
            <Save size={16} />
            {procedure ? 'Update Procedure' : 'Save Procedure'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProcedureForm;
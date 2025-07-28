import React, { useState, useMemo } from 'react';
import { Plus, Moon, Sun, Stethoscope } from 'lucide-react';
import type { Procedure } from '../../types/procedure';
import { useTheme } from '../../contexts/ThemeContext';
import { useToast } from '../../hooks/useToast';
import ProcedureForm from './ProcedureForm';
import ProcedureCard from './ProcedureCard';
import FilterBar from './FilterBar';
import ConfirmModal from './ConfirmModal';
import ToastContainer from './ToastContainer';

const SurgicalDashboard: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { toasts, addToast, removeToast } = useToast();
  
  const [procedures, setProcedures] = useState<Procedure[]>([
    {
      id: 'proc-001',
      title: 'Laparoscopic Cholecystectomy',
      category: 'General Surgery',
      preOpInstructions: 'Patient should fast for 12 hours before surgery. No medications except essential ones approved by anesthesia team.',
      postOpInstructions: 'Monitor for signs of infection. Gradual return to normal diet over 24-48 hours. Follow wound care instructions.',
      medicationReminders: ['Pain medication as prescribed', 'Antiemetic if nausea occurs', 'Resume regular medications'],
      exerciseSchedule: ['Deep breathing exercises', 'Short walks after 6 hours', 'Gradual increase in activity'],
      supplyList: ['Gauze pads', 'Medical tape', 'Thermometer', 'Ice packs'],
      status: 'Active',
      lastUpdated: new Date('2024-01-15'),
      createdAt: new Date('2024-01-10'),
    },
    {
      id: 'proc-002',
      title: 'Total Knee Replacement',
      category: 'Orthopedic',
      preOpInstructions: 'Physical therapy evaluation. Dental clearance required. Stop blood thinners as directed by physician.',
      postOpInstructions: 'Continuous passive motion machine use. Physical therapy starting day 1. Weight bearing as tolerated.',
      medicationReminders: ['Pain management protocol', 'DVT prophylaxis', 'Antibiotic completion'],
      exerciseSchedule: ['Ankle pumps', 'Quad sets', 'Range of motion exercises', 'Progressive ambulation'],
      supplyList: ['Walker', 'Ice machine', 'Compression stockings', 'Raised toilet seat'],
      status: 'Active',
      lastUpdated: new Date('2024-01-20'),
      createdAt: new Date('2024-01-15'),
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingProcedure, setEditingProcedure] = useState<Procedure | undefined>();
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; procedureId: string }>({ 
    isOpen: false, 
    procedureId: '' 
  });

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filteredProcedures = useMemo(() => {
    return procedures.filter(procedure => {
      const matchesSearch = procedure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          procedure.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          procedure.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !categoryFilter || procedure.category === categoryFilter;
      const matchesStatus = !statusFilter || procedure.status === statusFilter;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [procedures, searchTerm, categoryFilter, statusFilter]);

  const handleSubmit = (formData: Omit<Procedure, 'id' | 'lastUpdated' | 'createdAt'>) => {
    if (editingProcedure) {
      // Update existing procedure
      setProcedures(prev => prev.map(proc => 
        proc.id === editingProcedure.id 
          ? { ...proc, ...formData, lastUpdated: new Date() }
          : proc
      ));
      addToast('Procedure updated successfully', 'success');
    } else {
      // Create new procedure
      const newProcedure: Procedure = {
        id: `proc-${Date.now()}`,
        ...formData,
        lastUpdated: new Date(),
        createdAt: new Date(),
      };
      setProcedures(prev => [newProcedure, ...prev]);
      addToast('Procedure created successfully', 'success');
    }
    
    setShowForm(false);
    setEditingProcedure(undefined);
  };

  const handleEdit = (procedure: Procedure) => {
    setEditingProcedure(procedure);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setDeleteModal({ isOpen: true, procedureId: id });
  };

  const confirmDelete = () => {
    const procedure = procedures.find(p => p.id === deleteModal.procedureId);
    setProcedures(prev => prev.filter(proc => proc.id !== deleteModal.procedureId));
    setDeleteModal({ isOpen: false, procedureId: '' });
    addToast(`Procedure "${procedure?.title}" deleted successfully`, 'success');
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProcedure(undefined);
  };

  return (
    <div className="dashboard">
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-title">
            <div className="header-icon">
              <Stethoscope style={{ color: 'var(--color-primary)' }} size={24} />
            </div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Manage Surgical Procedures
            </h1>
          </div>
          
          <div className="header-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="btn btn-primary"
              >
                <Plus size={16} />
                Add Procedure
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {showForm && (
          <ProcedureForm
            procedure={editingProcedure}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        )}

        {!showForm && (
          <>
            <FilterBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              categoryFilter={categoryFilter}
              onCategoryChange={setCategoryFilter}
              statusFilter={statusFilter}
              onStatusChange={setStatusFilter}
            />

            <div className="results-count">
              <p>
                Showing {filteredProcedures.length} of {procedures.length} procedures
              </p>
            </div>

            {filteredProcedures.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">
                  <Stethoscope size={48} />
                </div>
                <h3 className="empty-title">
                  {procedures.length === 0 ? 'No procedures yet' : 'No procedures match your filters'}
                </h3>
                <p className="empty-message">
                  {procedures.length === 0 
                    ? 'Get started by adding your first surgical procedure.'
                    : 'Try adjusting your search or filter criteria.'
                  }
                </p>
                {procedures.length === 0 && (
                  <button
                    onClick={() => setShowForm(true)}
                    className="btn btn-primary"
                  >
                    <Plus size={16} />
                    Add First Procedure
                  </button>
                )}
              </div>
            ) : (
              <div className="procedures-grid">
                {filteredProcedures.map(procedure => (
                  <ProcedureCard
                    key={procedure.id}
                    procedure={procedure}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.isOpen}
        title="Delete Procedure"
        message="Are you sure you want to delete this procedure? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={confirmDelete}
        onCancel={() => setDeleteModal({ isOpen: false, procedureId: '' })}
        type="danger"
      />
    </div>
  );
};

export default SurgicalDashboard;
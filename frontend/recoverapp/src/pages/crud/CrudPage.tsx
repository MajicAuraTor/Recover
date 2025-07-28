import { useState } from "react";
import ProcedureForm from '../../components/crud/ProcedureForm';
import ProcedureCard from '../../components/crud/ProcedureCard';
import FilterBar from '../../components/crud/FilterBar';
import ConfirmModal from '../../components/crud/ConfirmModal';
import ToastContainer from '../../components/crud/ToastContainer';
import './crudpage.css';

const CrudPage = () => {
  // Control ConfirmModal state
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Example: procedure to delete (could be ID, or an object)
  const [procedureToDelete, setProcedureToDelete] = useState<string | null>(null);

  // Example delete handler
  const handleDelete = (id: string) => {
    setProcedureToDelete(id);
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    // Do your delete logic here, using procedureToDelete
    // For now, just hide the modal
    setShowConfirmModal(false);
    setProcedureToDelete(null);
    // Optionally, trigger a toast or reload data
  };

  const handleCancelDelete = () => {
    setShowConfirmModal(false);
    setProcedureToDelete(null);
  };

  return (
    <div>
      <FilterBar
        searchTerm=""
        onSearchChange={() => {}}
        categoryFilter=""
        onCategoryChange={() => {}}
        statusFilter=""
        onStatusChange={() => {}}
      />

      <ProcedureForm
        onSubmit={(_data) => {
          // handle submit logic
        }}
        onCancel={() => {
          // handle cancel logic
        }}
      />

      <ProcedureCard
        procedure={{
          id: '1',
          title: 'Appendectomy',
          category: 'General Surgery',
          preOpInstructions: '',
          postOpInstructions: '',
          medicationReminders: [],
          exerciseSchedule: [],
          supplyList: [],
          status: 'Active',
          lastUpdated: new Date(),
          createdAt: new Date()
        }}
        onEdit={() => {}}
        onDelete={() => handleDelete('1')} // Open modal for this procedure
      />

      {/* ConfirmModal is only open when showConfirmModal is true */}
      <ConfirmModal
        isOpen={showConfirmModal}
        title="Confirm Action"
        message="Are you sure you want to proceed?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />

      <ToastContainer toasts={[]} onRemove={() => {}} />
    </div>
  );
};

export default CrudPage;

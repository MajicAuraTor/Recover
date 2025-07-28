export interface Procedure {
  id: string;
  title: string;
  category: string;
  preOpInstructions: string;
  postOpInstructions: string;
  medicationReminders: string[];
  exerciseSchedule: string[];
  supplyList: string[];
  status: 'Active' | 'Draft' | 'Archived';
  lastUpdated: Date;
  createdAt: Date;
}

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}
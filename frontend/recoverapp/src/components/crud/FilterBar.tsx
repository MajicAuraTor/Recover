import React from 'react';
import { Search, Filter } from 'lucide-react';

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  categoryFilter: string;
  onCategoryChange: (category: string) => void;
  statusFilter: string;
  onStatusChange: (status: string) => void;
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

const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  statusFilter,
  onStatusChange,
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-header">
        <Filter size={16} style={{ color: 'var(--text-tertiary)' }} />
        <h3 className="filter-title">Filters</h3>
      </div>
      
      <div className="filter-grid">
        <div className="search-input">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search procedures..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="form-input"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="form-select"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="form-select"
        >
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Draft">Draft</option>
          <option value="Archived">Archived</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface MultiInputProps {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
}

const MultiInput: React.FC<MultiInputProps> = ({ label, values, onChange, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const addValue = () => {
    if (inputValue.trim() && !values.includes(inputValue.trim())) {
      onChange([...values, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeValue = (index: number) => {
    onChange(values.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addValue();
    }
  };

  return (
    <div className="multi-input">
      <label className="form-label">
        {label}
      </label>
      
      <div className="multi-input-header">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="form-input"
        />
        <button
          type="button"
          onClick={addValue}
          disabled={!inputValue.trim()}
          className="add-btn"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="multi-input-list">
        {values.map((value, index) => (
          <div key={index} className="multi-input-item">
            <span className="multi-input-text">{value}</span>
            <button
              type="button"
              onClick={() => removeValue(index)}
              className="remove-btn"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiInput;
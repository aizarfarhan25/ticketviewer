import React from 'react';

type FilterType = 'all' | 'active' | 'used';

interface TicketFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const TicketFilter: React.FC<TicketFilterProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex gap-4 mb-6">
      <button
        className={`px-6 py-2 rounded-full ${activeFilter === 'all' ? 'bg-emerald-400 text-white' : 'bg-white text-black'}`}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        className={`px-6 py-2 rounded-full ${activeFilter === 'active' ? 'bg-emerald-400 text-white' : 'bg-white text-black'}`}
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button
        className={`px-6 py-2 rounded-full ${activeFilter === 'used' ? 'bg-emerald-400 text-white' : 'bg-white text-black'}`}
        onClick={() => onFilterChange('used')}
      >
        Used
      </button>
    </div>
  );
};

export default TicketFilter;
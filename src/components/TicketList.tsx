import React from 'react';
import { Ticket } from '../types';
import TicketCard from './TicketCard';

interface TicketListProps {
  tickets: Ticket[];
  onStatusChange?: (id: number, newStatus: 'active' | 'used') => void;
}

const TicketList: React.FC<TicketListProps> = ({ tickets, onStatusChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tickets.map((ticket) => (
        <TicketCard 
          key={ticket.id} 
          ticket={ticket} 
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};

export default TicketList;
import React, { useState } from 'react';
import { Ticket } from '../types';
import TicketFilter from './TicketFilter';
import TicketList from './TicketList';

interface TicketContainerProps {
  initialTickets: Ticket[];
}

const TicketContainer: React.FC<TicketContainerProps> = ({ initialTickets }) => {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'used'>('all');

  // Filter tickets based on active filter
  const filteredTickets = activeFilter === 'all' 
    ? tickets 
    : tickets.filter(ticket => ticket.status === activeFilter);

  // Handle ticket status change
  const handleStatusChange = (id: number, newStatus: 'active' | 'used') => {
    setTickets(tickets.map(ticket => 
      ticket.id === id ? { ...ticket, status: newStatus } : ticket
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className=" text-gray-950 text-2xl font-bold mb-6">Ticket Viewer UI</h2>
      
      <TicketFilter 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />
      
      <TicketList 
        tickets={filteredTickets} 
        onStatusChange={handleStatusChange} 
      />
    </div>
  );
};

export default TicketContainer;
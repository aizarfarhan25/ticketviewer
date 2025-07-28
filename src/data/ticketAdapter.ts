import { Ticket } from '../types';
import ticketsData from './tickets.json';

// Fungsi untuk memformat tanggal dan waktu dari ISO string
const formatDateTime = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true
  });
};

// Mengubah format data dari tickets.json ke format yang digunakan aplikasi
export const adaptTickets = (): Ticket[] => {
  return ticketsData.map(ticket => ({
    id: ticket.id,
    name: ticket.eventName,
    location: ticket.location,
    time: formatDateTime(ticket.time),
    status: ticket.isUsed ? 'used' : 'active',
    owner: 'Supe Stame' // Default owner karena tidak ada di data JSON
  }));
};

// Data tiket yang sudah diformat
export const tickets: Ticket[] = adaptTickets();
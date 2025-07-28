export interface Ticket {
  id: number;
  name: string;
  location: string;
  time: string;
  status: 'active' | 'used';
  owner: string;
}
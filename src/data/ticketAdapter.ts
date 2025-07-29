import { Ticket } from "../types";
import ticketsData from "./tickets.json";

const formatDateTime = (isoString: string): string => {
  const timeMatch = isoString.match(/T(\d{2}):(\d{2})/);
  if (timeMatch) {
    const hour = parseInt(timeMatch[1]);
    const minute = timeMatch[2];
    return `${hour}:${minute} ${hour >= 12 ? "PM" : "AM"}`;
  }
  return "00:00 AM";
};

export const adaptTickets = (): Ticket[] => {
  return ticketsData.map((ticket) => ({
    id: ticket.id,
    name: ticket.eventName,
    location: ticket.location,
    time: formatDateTime(ticket.time),
    status: ticket.isUsed ? "used" : "active",
    // owner: "Aizar Farhan",
  }));
};

export const tickets: Ticket[] = adaptTickets();

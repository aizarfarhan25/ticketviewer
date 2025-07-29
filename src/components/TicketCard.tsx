import React from "react";
import { Ticket } from "../types";

interface TicketCardProps {
  ticket: Ticket;
  onStatusChange?: (id: number, newStatus: "active" | "used") => void;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket, onStatusChange }) => {
  const handleStatusChange = () => {
    if (onStatusChange) {
      const newStatus = ticket.status === "active" ? "used" : "active";
      onStatusChange(ticket.id, newStatus);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg text-gray-950 font-semibold">{ticket.name}</h3>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              ticket.status === "active"
                ? "bg-emerald-400 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {ticket.status === "active" ? "Active" : "Used"}
          </span>
        </div>
        <p className="text-gray-600 mb-1">{ticket.location}</p>
        <p className="text-gray-600 mb-4">{ticket.time}</p>

        <div className="border-t pt-3">
          <p className="text-gray-950 font-semibold mb-1">{ticket.owner}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600">Mark as Used</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={ticket.status === "used"}
              onChange={handleStatusChange}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

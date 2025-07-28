import React from 'react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'My Event Tickets UI' }) => {
  return (
    <header className="bg-sky-400 p-8 text-white flex items-center justify-center h-32">
      <h1 className="text-4xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;
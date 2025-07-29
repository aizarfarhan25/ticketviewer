# Ticket Viewer

A simple web application for displaying and managing event tickets. This app allows users to view a list of tickets, filter them by status (used/unused), and change ticket status.

## How to Run the Project

### Requirements

- Node.js (version 14.0.0 or higher)
- npm (version 6.0.0 or higher)

### Step 1: Clone Repository

```bash
# Clone repository
git clone https://github.com/aizarfarhan25/ticketviewer.git
```

### Step 2: Create a New Branch

Always create a new branch for working on features or fixes to avoid breaking the main branch:

```bash
# Make sure you are on the latest main branch
git checkout main
git pull

# Create new branch
git checkout -b your-branch-name
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by changing `src/pages/index.tsx`. The page will update automatically as you edit the file.

## Project Structure

This project uses the standard Next.js folder structure with some additional folders:

```
├── public/           # Static assets (images, favicon, etc.)
├── src/
│   ├── components/   # Reusable React components
│   ├── data/         # Static data and adapters
│   ├── pages/        # Next.js pages and API routes
│   ├── styles/       # Global CSS files
│   └── types/        # TypeScript definitions
```

### Main Components

- `TicketContainer`: Main component that manages ticket state and filters
- `TicketList`: Displays the list of tickets
- `TicketCard`: Shows individual ticket information
- `TicketFilter`: Allows filtering tickets by status

### Data Management

Ticket data is stored in a static JSON file at `src/data/tickets.json` and processed through an adapter in `src/data/ticketAdapter.ts`.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## How to Contribute

To contribute to this project, follow these steps:

1. Fork this repository
2. Create a new branch (`git checkout -b new-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin new-feature`)
6. Create a Pull Request

### Code Conventions

- Use TypeScript for all JavaScript files
- Follow consistent code formatting (use ESLint and Prettier)
- Write clear comments for complex functions and components
- Make sure all components have well-defined types

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with static types
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework


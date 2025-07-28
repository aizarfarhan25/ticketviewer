import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import TicketContainer from "../components/TicketContainer";
import { tickets } from "../data/ticketAdapter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-sans min-h-screen bg-gray-100`}>
      <Header />
      <main>
        <TicketContainer initialTickets={tickets} />
      </main>
    </div>
  );
}

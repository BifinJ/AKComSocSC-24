import React from "react";

interface TicketProps {
  heading: string;
  cost: number;
  link: string;
}

const Ticket: React.FC<TicketProps> = ({ heading, cost, link }) => {
  return (
    <div className="flex-col items-center justify-center pt-8">
      <div className="flex justify-center items-center gap-x-4">
        <div className="text-c5 font-bold text-4xl">●</div>
        <div className="text-xl text-slate-200  mt-2 uppercase tracking-widest ">
          {heading}
        </div>
      </div>
      <div className="flex bg-[url('/images/ticket.png')] p-32 bg-center font-bold bg-contain">
        <p className="text-[40px] rotate-[-21deg] text-slate-200">₹{cost}</p>
      </div>
      <div className="w-full flex items-center justify-center">
        <a
          href={link}
          target="_blank"
          className="bg-custom-gradient font-semibold text-slate-950 px-10 py-1 pb-2 rounded-full"
          rel="noopener noreferrer"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Ticket;

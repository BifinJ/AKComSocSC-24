import SectionHeading from "../components/SectionHeading";
import Ticket from "../components/Ticket";

export default function Registration() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[url('/images/Registration.png')] py-24 bg-cover">
      <div className="absolute z-[1] inset-0 bg-[#02102489]"></div>

      <div className="relative z-[10] flex-col items-center justify-center">
        <div className="pb-8">
          <SectionHeading heading="Grab your Tickets" />
        </div>
        <h4 className="mt-4 font-futura font-bold text-c5 text-lg md:text-3xl sm:text-2xl xs:text-xl">Solo Tickets</h4>
        <div className="relative  flex flex-col md:flex-row items-center justify-center">
          <Ticket heading="IEEE Member" image="/images/ticket2.png" cost={999} link="https://makemypass.com/akcomsocsc24" />
          <Ticket heading="Non IEEE Member" image="/images/ticket2.png" cost={1099} link="https://makemypass.com/akcomsocsc24" />
          <Ticket heading="IEEE ComSoc Member" image="/images/ticket2.png" cost={899} link="https://makemypass.com/akcomsocsc24" />
        </div>
        <div className="w-full flex items-center justify-center">
        <a
          href="https://makemypass.com/akcomsocsc24"
          target="_blank"
          className="bg-custom-gradient font-semibold text-slate-950 px-10 py-1 pb-2 rounded-full"
          rel="noopener noreferrer"
        >
          Register
        </a>
      </div>
        <h4 className="mt-4 font-futura font-bold text-c5 text-lg md:text-3xl sm:text-2xl xs:text-xl">3-Combo Tickets</h4>
        <div className="relative flex flex-col md:flex-row items-center justify-center">
          <Ticket heading="IEEE Members" image="/images/combo3.png" cost={2697} link="https://makemypass.com/akcomsocsc24" />
          <Ticket heading="Non IEEE Members" image="/images/combo3.png" cost={2997} link="https://makemypass.com/akcomsocsc24" />
          <Ticket heading="IEEE ComSoc Members" image="/images/combo3.png" cost={2397} link="https://makemypass.com/akcomsocsc24" />
        </div>
        <div className="w-full flex items-center justify-center">
        <a
          href="https://makemypass.com/akcomsocsc24"
          target="_blank"
          className="bg-custom-gradient font-semibold text-slate-950 px-10 py-1 pb-2 rounded-full"
          rel="noopener noreferrer"
        >
          Register
        </a>
      </div>
        <h4 className="mt-4 font-futura font-bold text-c5 text-lg md:text-3xl sm:text-2xl xs:text-xl">5-Combo Tickets</h4>
        <div className="relative flex flex-col md:flex-row items-center justify-center">
          <Ticket heading="IEEE Members" image="/images/combo5.png" cost={4245} link="https://makemypass.com/akcomsocsc24" />
          <Ticket heading="Non IEEE Members" image="/images/combo5.png" cost={4745} link="https://makemypass.com/akcomsocsc24" />
          <Ticket heading="IEEE ComSoc Members" image="/images/combo5.png" cost={3745} link="https://makemypass.com/akcomsocsc24" />
        </div>
        <div className="w-full flex items-center justify-center">
        <a
          href="https://makemypass.com/akcomsocsc24"
          target="_blank"
          className="bg-custom-gradient font-semibold text-slate-950 px-10 py-1 pb-2 rounded-full"
          rel="noopener noreferrer"
        >
          Register
        </a>
      </div>
      </div>
    </div>
  );
}

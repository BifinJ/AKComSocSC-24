import SectionHeading from "../components/SectionHeading";
import Ticket from "../components/Ticket";

export default function Registration() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[url('/images/Registration.png')] py-24 bg-cover">
      <div className="absolute z-[1] inset-0 bg-[#02102489]"></div>

      <div className="relative z-[10] flex-col items-center justify-center">
        <div className="pb-16">
          <SectionHeading heading="Grab your Tickets" />
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-center">
          <Ticket heading="IEEE Member" cost={400} link="www" />
          <Ticket heading="IEEE Member" cost={400} link="www" />
          <Ticket heading="IEEE Member" cost={400} link="www" />

          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-c1 bg-opacity-30 backdrop-blur-md z-40 flex items-center justify-center">
            <h4 className=" text-4xl lg:text-6xl font-bold text-white drop-shadow-lg animate-pulse">
              COMING SOON
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

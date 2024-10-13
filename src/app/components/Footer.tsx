import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-c1 text-white pt-8">
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-2.5 md:py-12 md:mb-20">
        <div className=" w-full md:w-3/5 text-center md:text-left"> 
          <h2 className=" font-futura font-bold text-c5 text-2xl md:text-5xl sm:text-4xl xs:text-3xl">AKComSocSC-24</h2>
          <p className="text-sm mt-2 max-w-l font-open pt-4 text-justify md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          </p>
        </div>
        <div className=" w-full md:w-2/5 flex flex-col items-center justify-center text-center mt-8 md:mt-0">
          <h3 className="text-lg font-semibold mb-1 font-futura">CONTACT US</h3>
          <p className="font-open text-sm md:text-base font-normal mt-1">
            Phone: <a href="tel:+919876543210" className="hover:underline">+91 9876543210</a>
          </p>
          <p className="font-open text-sm md:text-base font-normal mt-1">
            Email: <a href="mailto:sample@ieee.org" className="hover:underline">sample@ieee.org</a>
          </p>
        </div>
      </div>

      <div className="w-full bg-c2 bg-opacity-20 py-4 text-center text-c4 font-open">
        <p className=" text-xs md:text-sm">2024 ©AKComSocSC&apos;24. All Rights Reserved.</p>
        <p className=" text-xs md:text-sm">Designed and Developed by AKComSocSC&apos;24 WebTeam</p>
      </div>
    </footer>
  );
}

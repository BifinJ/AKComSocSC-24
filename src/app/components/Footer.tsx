import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-c1 text-white pt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-32 mb-32">
        <div className="md:mb-0 flex-1 md:flex-[0.7] text-center md:text-left"> 
          <h2 className="font-futura font-bold text-c5 text-2xl md:text-5xl sm:text-4xl xs:text-3xl">AKComSocSC</h2>
          <p className="text-sm mt-2 max-w-l font-open pt-4 text-justify md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          </p>
        </div>
        <div className="flex-1 text-center md:flex-[0.3] md:text-center mt-8 md:mt-0 md:text-right">
          <h3 className="text-lg font-semibold mb-2 font-futura">CONTACT US</h3>
          <p className="font-open text-sm md:text-base font-normal mt-1">
            Phone: <a href="tel:+919876543210" className="hover:underline">+91 9876543210</a>
          </p>
          <p className="font-open text-sm md:text-base font-normal mt-1">
            Email: <a href="mailto:sample@ieee.org" className="hover:underline">sample@ieee.org</a>
          </p>
        </div>
      </div>

      <div className="w-full bg-c2 bg-opacity-20 py-4 text-center text-c4 font-open px-8 md:px-32">
        <p className="text-sm">2024 © AKComSocSC. All Rights Reserved.</p>
        <p className="text-sm">Designed and Developed by AKComSocSC WebTeam</p>
      </div>
    </footer>
  );
}

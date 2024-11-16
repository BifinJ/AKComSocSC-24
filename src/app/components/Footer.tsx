import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-c2 text-white pt-8">
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-2.5 md:py-12 md:mb-20">
        <div className=" w-full md:w-3/5 text-center md:text-left"> 
          <h2 className=" font-futura font-bold text-c5 text-2xl md:text-5xl sm:text-4xl xs:text-3xl">AKComSocSC-24</h2>
          <p className="text-sm mt-2 max-w-l font-open pt-4 text-justify md:text-left">
            Join us at AKComSocSC&apos;24, where innovation meets collaboration. Explore the latest advancements in communications technology, network with industry experts, and unleash your potential. Shaping the future of communications, together.
          </p>
        </div>
        <div className=" w-full md:w-2/5 flex flex-col items-center justify-center text-center mt-8 md:mt-0">
          <h3 className="text-lg font-semibold mb-1 font-futura">CONTACT US</h3>
          <p className="font-open text-sm md:text-base font-normal mt-1">
            Anjali Vijay: <a href="tel:+917994807141" className="hover:underline">+91 7994807141</a>
          </p>
          <p className="font-open text-sm md:text-base font-normal mt-1">
            Hanna Elza John: <a href="tel:+918921931121" className="hover:underline">+91 8921931121</a>
          </p>
        </div>
      </div>

      <div className="w-full bg-[#0d3673] bg-opacity-10 py-4 text-center text-c4 font-open">
        <p className=" text-xs md:text-sm">2024 ©AKComSocSC&apos;24. All Rights Reserved.</p>
        <p className=" text-xs md:text-sm">Designed and Developed by AKComSocSC&apos;24 Web Team</p>
      </div>
    </footer>
  );
}

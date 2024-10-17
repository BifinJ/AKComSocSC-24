import React from "react";

export default function SectionHeading({ heading } : { heading:string } ) {
  return (
    <div className="flex flex-col items-center">
      <h2 className=" font-futura font-bold text-c5 text-xl md:text-4xl sm:text-3xl xs:text-2xl uppercase">
        {heading}
      </h2>
      <div className="bg-c3 w-24 lg:w-32 h-1.5 mt-1.5 rounded-full"></div>
    </div>
  );
};

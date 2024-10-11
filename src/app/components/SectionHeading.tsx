import React from "react";

export default function SectionHeading({ heading } : { heading:string } ) {
  return (
    <div className="flex flex-col items-center">
      <h2 className=" font-futura font-bold text-c1 text-2xl md:text-5xl sm:text-4xl xs:text-3xl uppercase">
        {heading}
      </h2>
      <div className="bg-c3 w-24 lg:w-32 h-1.5 mt-1.5 rounded-full"></div>
    </div>
  );
};

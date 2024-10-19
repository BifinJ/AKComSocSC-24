import React from "react";

export default function SubHeading({ heading, className } : { heading:string, className?: string } ) {
  return (
    <h2 className={`font-futura font-bold text-c5 text-lg md:text-3xl sm:text-2xl xs:text-xl uppercase ${className}`}>
      {heading}
    </h2>
  );
};

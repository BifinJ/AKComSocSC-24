import React from "react";

export default function ContactSubHeading({ heading } : { heading:string } ) {
  return (
    <h2 className=" font-futura font-bold text-c5 text-lg md:text-3xl sm:text-2xl xs:text-xl uppercase">
      {heading}
    </h2>
  );
};

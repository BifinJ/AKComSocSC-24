import React from 'react';

type WorkshopCardProps = {
  WorkshopName: string;
  WorkshopAbout: string;
  SpeakerImage: string;
};

export default function WorkshopCard({ WorkshopName, WorkshopAbout, SpeakerImage }: WorkshopCardProps) {
  return (
    <div className="relative bg-c5 w-full max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/workshop-card-bg.png')",
          }}
        ></div>
        <h3 className="font-futura font-bold text-c5 text-xl lg:text-2xl absolute bottom-4 left-4">
          {WorkshopName}
        </h3>
      </div>

      <div>
        <p className="text-sm text-c2 leading-relaxed pl-4 py-4 text-justify w-[65%]">
          {WorkshopAbout}
        </p>
      </div>

      <div className=" absolute -right-56 bottom-0 flex justify-center items-center">
        <img
          src={SpeakerImage}
          alt={`Speaker for ${WorkshopName}`}
          className="w-[40%] h-[60%]"
        />
      </div>
    </div>
  );
}

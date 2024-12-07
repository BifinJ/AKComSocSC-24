import React from 'react';

type WorkshopCardProps = {
  WorkshopName: string;
  SpeakerImage: string;
};

export default function WorkshopCard({ WorkshopName, SpeakerImage }: WorkshopCardProps) {
  return (
    <div className="bg-c5 w-full max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-c2 leading-relaxed pl-4 py-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={SpeakerImage}
            alt={`Speaker for ${WorkshopName}`}
            className="w-[120%] h-[120%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import SectionHeading from '../components/SectionHeading';

const Timeline: React.FC = () => {
  const events = [
    { date: "April 22", title: "Registration" },
    { date: "April 25", title: "Round 1" },
    { date: "May 5", title: "Final Submission" },
    { date: "April 22", title: "Registration" },
    { date: "April 25", title: "Round 1" },
    { date: "May 5", title: "Final Submission" },
  ];

  return (
    <div className="bg-[#051D3F] w-dvw min-h-dvh py-8 lg:py-24 px-5 lg:px-32">
      <SectionHeading heading="Timeline" />
      <div className="hidden min-h-screen md:flex flex-col items-center justify-center mt-10 mb-10">
        <div className="relative w-full md:w-3/4 py-10">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-300" />
          <div className="flex justify-between relative z-10">
            {events.map((event, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="absolute top-1/2 transform -translate-y-1/2">
                  <div className="w-20 h-20 rounded-full border-4 border-blue-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-300" />
                  </div>
                </div>
                {index % 2 === 0 ? (
                  <>
                    <p className="text-coffwhite font-open text-2xl justify-center font-normal absolute -top-20 whitespace-nowrap">{event.date}</p>
                    <div className="absolute w-1 h-[250px] border-l-2 border-dotted border-blue-300 top-[40px]" />
                    <h4 className="text-coffwhite font-open text-xl absolute top-[310px] whitespace-nowrap">{event.title}</h4>
                    <div className="absolute top-[290px] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-300" />
                  </>
                ) : (
                  <>
                    <h4 className="text-coffwhite font-open text-xl absolute -top-[310px] whitespace-nowrap">{event.title}</h4>
                    <div className="absolute bottom-[40px] w-1 h-[220px] border-l-2 border-dotted border-blue-300" />
                    <p className="text-coffwhite font-open text-2xl font-normal absolute top-12 whitespace-nowrap">{event.date}</p>
                    <div className="absolute bottom-[260px] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-300" />
                  </>
                )}

              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden min-h-screen flex flex-col items-center justify-center mt-10 mb-10">
        <div className="relative w-full md:w-3/4 ">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-300" />
          <div className="flex flex-col md:hidden justify-center relative z-10">
            {events.map((event, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full border-4 border-blue-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-300" />
                  </div>
                </div>
                <p className="text-coffwhite font-open text-lg font-normal mt-2">
                  {event.date}
                </p>
                <h4 className="text-coffwhite font-open font-bolder">
                  {event.title}
                </h4>
                {index < events.length - 1 && (
                  <div className="w-1 h-32 border-l-2 border-dotted border-blue-300 mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

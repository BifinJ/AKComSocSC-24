import React from 'react';
import SectionHeading from '../components/SectionHeading';

const Timeline: React.FC = () => {
  const dates = ["April 22", "April 25", "May 5", "April 22", "April 25", "May 5"];
  const titles = ["Registration", "Round 1", "Final Submission", "Registration", "Round 1", "Final Submission"];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#051D3F]">
      {/* Section Title at the top */}
      <SectionHeading heading="Timeline"  />

      <div className="relative w-full md:w-3/4 mt-12"> {/* Added margin-top for spacing */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-300" />

        <div className="flex justify-between relative z-10">
          {dates.map((date, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {index % 2 === 0 ? (
                <>
                  <p className="text-coffwhite font-open text-sm md:text-base font-normal">{date}</p>
                  <div className="w-20 h-20 rounded-full border-4 border-blue-300 flex items-center justify-center relative">
                    <div className="w-12 h-12 rounded-full bg-blue-300" />
                  </div>
                  <h4 className="text-coffwhite font-open font-bolder">{titles[index]}</h4>
                </>
              ) : (
                <>
                  <h4 className="text-coffwhite font-open font-bolder">{titles[index]}</h4>
                  <div className="w-20 h-20 rounded-full border-4 border-blue-300 flex items-center justify-center relative">
                    <div className="w-12 h-12 rounded-full bg-blue-300" />
                  </div>
                  <p className="text-coffwhite font-open font-bolder">{date}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;


/* import React from 'react';
import SectionHeading from '../components/SectionHeading';

const Timeline: React.FC = () => {
  const dates = ["April 22", "April 25", "May 5", "April 22", "April 25", "May 5"];
  const titles = ["Registration", "Round 1", "Final Submission", "Registration", "Round 1", "Final Submission"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#051D3F]">
      <SectionHeading heading="Timeline" />

      <div className="relative w-full md:w-3/4 py-10">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-300" />

        <div className="flex justify-between relative z-10 min-h-screen">
          {dates.map((date, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div className="absolute top-1/2 transform -translate-y-1/2">
                <div className="w-20 h-20 rounded-full border-4 border-blue-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-300" />
                </div>
              </div>

              {index % 2 === 0 ? (
                <>
                  <p className="text-coffwhite font-open text-sm md:text-base font-normal mb-1">{date}</p>
                  <h4 className="text-coffwhite font-open font-bolder">{titles[index]}</h4>
                </>
              ) : (
                <>
                  <h4 className="text-coffwhite font-open font-bolder mb-1">{titles[index]}</h4>
                  <p className="text-coffwhite font-open text-sm md:text-base font-normal">{date}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; */

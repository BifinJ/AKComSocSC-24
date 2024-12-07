import React from 'react';
import SectionHeading from '../components/SectionHeading';
import WorkshopCard from '../components/WorkshopCard';

export default function Workshop() {
  return (
    <section id="Workshops" className="bg-c1 py-8 lg:py-24 px-5 md:px-20 lg:px-32">
      <SectionHeading heading="Workshops" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 my-24">
        <WorkshopCard 
          WorkshopName="Workshop Name"
          SpeakerImage="/Images/workshop-speaker.png" 
        />
        <WorkshopCard 
          WorkshopName="Workshop Name"
          SpeakerImage="/Images/workshop-speaker.png" 
        />
        <WorkshopCard 
          WorkshopName="Workshop Name"
          SpeakerImage="/Images/workshop-speaker.png" 
        />
      </div>
    </section>
  );
}

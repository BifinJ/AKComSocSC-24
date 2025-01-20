import React from 'react';
import SectionHeading from '../components/SectionHeading';
import WorkshopCard from '../components/WorkshopCard';

export default function Talksession() {

  const workshops = [
    {
      WorkshopName: "Advances in Underwater Optical Communication Using Vortex Beams",
      WorkshopAbout: "Ms. Athira T Das's talk explores advancements in underwater optical communication with vortex beams. It highlights innovative applications, enhancing data transmission efficiency and reliability. Participants learn about vortex beam propagation, its advantages, and potential to revolutionize underwater communication. The session covers cutting-edge research, challenges, and emerging trends in advancing underwater technologies.",
      SpeakerImage: "/images/Workshop/athira.png"
    },
    {
      WorkshopName: "IEEE 802.11P: Unlocking The Potential of V2X Communication",
      WorkshopAbout: "Mr. Rohit Manikandan K.P.'s session explores IEEE 802.11 P for Vehicle-to-Everything (V2X) communication. Attendees learn about its principles and applications for seamless vehicle and infrastructure communication, enhancing road safety and efficiency. The session highlights advancements, challenges, and opportunities in V2X, offering insights into its role in intelligent transportation systems and autonomous vehicles.",
      SpeakerImage: "/images/Workshop/Rohit.png"
    },
    {
      WorkshopName: "Driving the Future: A Deep Dive into Automotive & Wireless Security",
      WorkshopAbout: "Mr. Joel John's session covers critical aspects of automotive and wireless security, highlighting their future impact on technology. Participants gain insights into challenges and solutions in securing modern vehicles and wireless systems. The session explores advanced techniques, industry trends, and emerging technologies, equipping attendees with a deeper understanding of the evolving security landscape.",
      SpeakerImage: "/images/Workshop/joel.png"
    },
  ]

  return (
    <section id="Workshops" className="bg-c1 py-8 lg:py-24 px-5 md:px-20 lg:px-32">
      <SectionHeading heading="Talk Sessions" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 my-24">
        {workshops.map((workshop, index) =>(
          <WorkshopCard
            key={index}
            WorkshopName={workshop.WorkshopName}
            WorkshopAbout={workshop.WorkshopAbout}
            SpeakerImage={workshop.SpeakerImage}
          />
        ))}
      </div>
    </section>
  );
}

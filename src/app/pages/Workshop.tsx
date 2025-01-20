import React from 'react';
import SectionHeading from '../components/SectionHeading';
import WorkshopCard from '../components/WorkshopCard';

export default function Workshop() {

  const workshops = [
    {
      WorkshopName: "Workshop on FPGA in VLSI and IoT in Embedded Systems",
      WorkshopAbout: 'The workshop, led by Mr. Shinos, delves into the practical applications of Field-Programmable Gate Arrays (FPGAs) within the realms of Very Large-Scale Integration (VLSI) and the Internet of Things (IoT) in embedded systems. Participants actively engage with FPGA-based designs and IoT integration, gaining valuable hands-on experience. The workshop explores the cutting-edge trends and technologies shaping these dynamic fields.',
      SpeakerImage: "/images/Workshop/shinos.jpg"
    },
    {
      WorkshopName: "Workshop on Cyber Forensics",
      WorkshopAbout: 'The workshop, led by Dr. Dija S., emphasizes practical Cyber Forensics in investigating and mitigating cybercrimes. Participants analyze digital evidence, explore forensic tools, and understand methodologies in uncovering cyber threats. It provides hands-on experience in tracing data breaches, recovering compromised data, and ensuring digital security. It also highlights emerging trends, equipping attendees with skills to address modern cybersecurity challenges.',
      SpeakerImage: "/images/Workshop/dija.png"
    },
  ]

  return (
    <section id="Workshops" className="bg-c1 py-8 lg:py-24 px-5 md:px-20 lg:px-32">
      <SectionHeading heading="Workshops" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 my-24">
        {workshops.map((workshop, index) =>(
          <WorkshopCard
            key={index}
            WorkshopName={workshop.WorkshopName}
            WorkshopAbout={workshop.WorkshopAbout}
            SpeakerImage={workshop.SpeakerImage}
          />
        ))}
      </div>
      <div className=' flex items-center justify-center'>
        <img src="/images/Workshop/hamradio.jpg" className='w-1/4 h-1/4' alt="" />
      </div>
    </section>
  );
}

import AboutCard from "../components/AboutCard";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section id="About" className="bg-c1 w-dvw min-h-dvh py-8 lg:py-24 px-5 lg:px-32 flex flex-col items-center justify-center text-center">
      <SectionHeading heading="About Us"/>
      <p className=" text-cwhite font-open text-sm md:text-base font-normal mt-8 text-justify leading-relaxed lg:px-32">
        The All Kerala Communications Society Student Congress (AKComSocSC) is a prestigious annual event organized under the banner of the IEEE Communications Society (ComSoc). This flagship event serves as a vibrant platform for students, researchers, and industry professionals across Kerala to come together, foster collaboration, and fuel their passion for communication technologies.
        AKComSocSC is more than just a conference—it&apos;s an experience. With a rich lineup of hands-on workshops, enlightening talk sessions and some cultural fun, attendees will have the unique opportunity to dive deep into the latest advancements in communications technology and have a time of their lives.
        The event is designed to be a melting pot of ideas, offering attendees the chance to network with peers, engage with experts, and explore emerging trends in the ever-evolving field of communications. It&apos;s not just about learning—it&apos;s about connecting, collaborating, and being inspired to push boundaries.
      </p>
      <div className="relative w-full h-fit lg:h-[460px] flex items-center flex-col md:flex-row px-0 lg:px-32 mt-8 text-cwhite">
        <div className=" w-full lg:w-1/2 h-full flex flex-col items-center justify-between p-2 md:p-5 pr-0 md:pr-7">
          <div>
            <h3 className=" font-bold text-lg md:text-xl uppercase text-center text-c4">VISION</h3>
            <h5 className=" font-bold text-base md:text-lg capitalize text-c4">Shaping a Connected and Resilient Future</h5>
          </div>
          <p className=" font-normal text-sm md:text-lg text-justify pb-0 md:pb-6">To empower the next generation of innovators in communication technology by fostering a culture of creative exploration and knowledge-sharing. Through this conclave, we aim to ignite curiosity, inspire innovation, and cultivate leaders who transform ideas into groundbreaking solutions that serve humanity in critical times and beyond. By integrating advanced technologies into disaster management, the goal is to enhance global safety and connectivity, ensuring communities and critical infrastructures are supported by robust communication systems in any situation.</p>
        </div>
        <div className=" hidden md:block w-[2px] h-4/5 bg-c4"></div>
        <div className=" w-full lg:w-1/2 h-full flex flex-col items-center justify-between p-2 md:p-5 pl-0 md:pl-7">
          <div>
            <h3 className=" font-bold text-lg md:text-xl uppercase text-center text-c4">MISSION</h3>
            <h5 className=" font-bold text-base md:text-lg capitalize text-c4">Empowering Innovation and Resilience in Communication Technology</h5>
          </div>
          <p className=" font-normal text-sm md:text-lg text-justify">The mission of the All Kerala Communications Society Student Conclave (AKComSocSC) is to inspire and empower students to innovate and contribute to the ever-evolving field of communication technology. The conclave fosters creativity, promotes awareness of cybersecurity challenges, and emphasizes the development of resilient communication systems for disaster management and emergencies. By highlighting the importance of modern and alternative communication tools, AKComSocSC aims to equip students with the skills and knowledge needed to shape a secure, connected, and technologically advanced future.</p>
        </div>
      </div>
      <AboutCard />
    </section>
  );
}


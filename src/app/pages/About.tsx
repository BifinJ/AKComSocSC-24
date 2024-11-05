import AboutCard from "../components/AboutCard";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section className="bg-c1 w-dvw min-h-dvh py-8 lg:py-24 px-5 lg:px-32 flex flex-col items-center justify-center text-center">
      <SectionHeading heading="About Us"/>
      <p className=" text-cwhite font-open text-sm md:text-base font-normal mt-8 text-justify ">
      AKComSocSC, flagship event of IEEE ComSoc Kerala Chapter, offers a memorable experience for students, researchers, and industry professionals. 
      Through hands-on Workshops and talk sessions, you will gain practical skills and insights into the latest advancements in communications technology.
      Join us to discover the exciting world of communications technology and enhance your knowledge. 
      </p>
      <AboutCard />
    </section>
  );
}


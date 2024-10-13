import AboutCard from "../components/AboutCard";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section className="bg-c1 w-dvw min-h-dvh py-8 lg:py-24 px-5 lg:px-32 flex flex-col items-center justify-center text-center">
      <SectionHeading heading="About Us"/>
      <p className=" text-cwhite font-open text-sm md:text-base font-normal mt-8 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        scelerisque, risus id elementum facilisis, urna felis vulputate
        nunc, at bibendum ipsum lectus in velit. Nulla facilisi. Quisque
        vestibulum, arcu at semper cursus, metus velit semper neque, non
        ultricies felis dui vel felis. Sed vel neque et ligula facilisis
        laoreet. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas.
      </p>
      <AboutCard />
    </section>
  );
}

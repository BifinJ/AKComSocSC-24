import SectionHeading from "../components/SectionHeading";
import SponsorCard from "../components/SponsorCard";

export default function Sponsors() {

    const partners = [
        "/images/mace35.png",
        "/images/comsoc.png"
    ]

  return (
    <section id="Sponsors" className="bg-c2 w-dvw min-h-dvh py-8 lg:py-24 px-5 lg:px-32 flex flex-col items-center justify-start text-center">
      <SectionHeading heading="Partners"/>
      <div className=" w-3/5 flex items-center justify-between flex-col md:flex-row gap-6 py-6 pt-10">
          {partners.map((sponsor, index) => (
            <SponsorCard key={index} logo={sponsor}/>
          ))}
      </div>
      {/* <SectionHeading heading="Sponsors"/> */}
      {/* <div className=" w-full lg:w-3/5 flex items-center justify-between py-6 pt-10">
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={index} logo={sponsor}/>
          ))}
      </div> */}
    </section>
  )
}

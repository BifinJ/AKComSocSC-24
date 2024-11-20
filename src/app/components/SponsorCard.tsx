export default function SponsorCard({logo}: {logo: string}) {
  return (
    <div className="relative bg-c5 w-60 md:w-80 h-52 md:h-64 rounded-3xl flex items-center justify-center">
        <div className=" absolute -top-4 w-8 h-8 rounded-full bg-gradient-to-b from-[#021024] to-[#052659]"></div>
        <img src={logo} alt="" className=" h-60 object-contain"/>
        <div className=" absolute bottom-0 rounded-b-3xl bg-gradient-to-r from-[#021024] to-[#052659] w-full h-8"></div>
    </div>
  )
}

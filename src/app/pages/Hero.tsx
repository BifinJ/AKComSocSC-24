import Image from 'next/image'
import clock from '../../../public/images/clock-icon.png'
import location from '../../../public/images/location-icon.png'

/*
TODOS: 
    Parallax effect
    Border gradient
    Mobile view bg image
*/
    

const Hero = () => {
  return (
    <section className="font-futura bg-[url(/images/hero-bg.png)] bg-cover bg-center bg-no-repeat w-dvw min-h-dvh py-8 lg:py-24 px-5 lg:px-32 flex flex-col items-center text-center">
       <div className='mt-24 sm:mt-16 flex flex-col justify-center items-center'>
        <h1 className="font-bold text-4xl sm:text-6xl md:text-8xl text-c5 ">
            AKComSocSC
          </h1>
          <h2 className="text-coffwhite text-center text-basis md:text-xl font-bold mt-2">
            All Kerala Communications Society Student Conclave 2024
          </h2>
       </div>
      
        <div className=" px-5 py-6 mt-10  border-white rounded-3xl md:px-8 sm:py-6 sm:mt-16">
          <div className='flex items-center'>
            <Image alt='clock-icon' src={clock} className='size-5 sm:size-6 md:size-7 mr-1 sm:mr-3'/>
            <p className="text-basis sm:text-xl md:text-2xl font-semibold text-coffwhite">December 21 - 22, 2024</p>
          </div>
 
          <div className='flex items-center mt-2 md:mt-5'>
            <Image alt='location-icon' src={location} className='size-5 sm:size-6 md:size-7 mr-1 sm:mr-3'/>
            <p className="text-basis sm:text-xl md:text-2xl font-semibold text-coffwhite">MACE, Kothamangalam</p>
          </div>
        </div>

        <div className='flex gap-x-3 sm:gap-x-4 md:gap-x-6 mt-16'>
          <div className='flex flex-col'>
            <div className='flex gap-x-1 sm:gap-x-2 items-center justify-center'>
              <div className='text-lg px-3 py-2  sm:px-4 sm:py-3 md:px-5 md:py-4 sm:text-xl md:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl'>0</div>
              <div className='text-lg px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 sm:text-xl md:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl'>0</div>
            </div>
            <p className='text-coffwhite text-basis sm:text-lg md:text-xl font-semibold mt-2 sm:mt-3 md:mt-4'>DAYS</p>
          </div>

          <div className='flex flex-col'>
            <div className='flex gap-x-1 sm:gap-x-2 items-center justify-center'>
              <div className='text-lg px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 sm:text-xl md:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl'>0</div>
              <div className='text-lg px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 sm:text-xl md:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl'>0</div>
            </div>
            <p className='text-coffwhite text-basis sm:text-lg md:text-xl font-semibold mt-2 sm:mt-3 md:mt-4'>HOURS</p>
          </div>

          <div className='flex flex-col'>
            <div className='flex gap-x-1 sm:gap-x-2 items-center justify-center'>
              <div className='text-lg px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 sm:text-xl md:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl'>0</div>
              <div className='text-lg px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 sm:text-xl md:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl'>0</div>
            </div>
            <p className='text-coffwhite text-basis sm:text-lg md:text-xl font-semibold mt-2 sm:mt-3 md:mt-4'>MINUTES</p>
          </div>
          

        </div>
{/*
          <div className='flex flex-col'>
            <div className='flex sm:gap-x-3'>
              <div  className='text-xl px-5 py-4 sm:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl sm:px-5 sm:py-4'>0</div>
              <div   className='text-xl px-5 py-4 sm:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl sm:px-5 sm:py-4'>0</div>
            </div>
            <p className='text-coffwhite text-xl font-semibold  mt-4'>HOURS</p>
          </div>

          <div className='flex flex-col'>
            <div className='flex sm:gap-x-3'>
              <div className='text-xl px-5 py-4 sm:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl sm:px-5 sm:py-4'>0</div>
              <div className='text-xl px-5 py-4 sm:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl sm:px-5 sm:py-4'>0</div>
            </div>
            <p className='text-coffwhite text-xl font-semibold mt-4'>MINUTES</p>
          </div>        
         
        </div>
        */}


    </section>
  )
}
export default Hero
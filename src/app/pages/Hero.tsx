'use client'
import Image from 'next/image'
import clock from '../../../public/images/clock-icon.png'
import location from '../../../public/images/location-icon.png'
import { useEffect, useState } from 'react'
import RegisterButton from '../components/RegisterButton'

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);

  useEffect(() => {
    const targetDate = new Date('2024-12-20T09:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('Hero');
      if (heroSection) {
        const scrollY = window.scrollY;
       heroSection.style.backgroundPosition = `center ${scrollY * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    <section
    id="Hero"
    className="font-futura bg-[url(/images/heromob5.png)] sm:bg-[url(/images/hero-bg-final.png)] bg-cover bg-no-repeat w-dvw min-h-dvh py-8 lg:py-10 px-5 lg:px-32 flex flex-col items-center text-center">
      <div className='flex flex-col justify-center my-auto'>
      <div className='flex flex-col justify-center items-center'>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl text-c5 ">
            AKComSocSC
          </h1>
          <h2 className="text-coffwhite text-center text-basis lg:text-xl font-bold mt-2">
            All Kerala Communications Society Student Conclave 2024
          </h2>
       </div>
      
        <div className="flex flex-col items-center justify-center px-5 py-6 mt-10  border-white rounded-3xl md:px-8 sm:py-6 lg:mt-16">
          <div className='flex items-center'>
            <Image alt='clock-icon' src={clock} className='size-5 sm:size-6 md:size-7 mr-1 sm:mr-3'/>
            <p className="text-basis sm:text-xl md:text-2xl font-semibold text-coffwhite">December 20 - 21, 2024</p>
          </div>
 
          <div className='flex items-center mt-2 md:mt-5'>
            <Image alt='location-icon' src={location} className='size-5 sm:size-6 md:size-7 mr-1 sm:mr-3'/>
            <p className="text-basis sm:text-xl lg:text-2xl font-semibold text-coffwhite">MACE, Kothamangalam</p>
          </div>
          <RegisterButton href='/Brochure.pdf' className='mt-2 md:mt-5' text="Brochure" />
        </div>
        <div className='flex items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-6 mt-10 lg:mt-16'>
        {['DAYS', 'HOURS', 'MINUTES', 'SECONDS'].map((label) => (
            <div key={label} className="flex flex-col">
              <div className="flex items-center justify-center">
                {label === 'DAYS' && (
                  <div className="text-basis p-3 sm:p-4 lg:px-4 lg:py-5 sm:text-xl lg:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl">
                    {formatNumber(timeLeft.days)}
                  </div>
                )}
                {label === 'HOURS' && (
                  <div className="text-basis p-3 sm:p-4 lg:px-4 lg:py-5 sm:text-xl lg:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl">
                    {formatNumber(timeLeft.hours)}
                  </div>
                )}
                {label === 'MINUTES' && (
                  <div className="text-basis p-3 sm:p-4 lg:px-4 lg:py-5 sm:text-xl lg:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl">
                    {formatNumber(timeLeft.minutes)}
                  </div>
                )}
                {label === 'SECONDS' && (
                  <div className="text-basis p-3 sm:p-4 lg:px-4 lg:py-5 sm:text-xl lg:text-3xl font-bold text-c5 border border-white rounded-xl sm:rounded-2xl">
                    {formatNumber(timeLeft.seconds)}
                  </div>
                )}
              </div>
              <p className="text-coffwhite text-sm sm:text-lg lg:text-xl font-medium mt-2 sm:mt-3 md:mt-4">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Hero
"use client"
import { useState, useEffect } from "react";
import { images } from "../components/galleryImages";
import SubHeading from "../components/SubHeading";
import SectionHeading from "../components/SectionHeading";

export default function GallerySection() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set the initial width
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (width > 1024) {
    return (
      <section className="min-h-screen bg-c1 flex items-center justify-center px-36 py-8">
        <div className="grid grid-cols-5 h-screen w-screen gap-1">
          <div className="col-span-1 grid grid-rows-3 gap-1">
            {[0, 1, 2].map((index) => (
              <div className="w-full h-full relative overflow-hidden group" key={index}>
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${images[index]})` }}
                ></div>
                <div className="absolute inset-0 bg-[#052659] opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="col-span-4 grid grid-rows-2 gap-1">
            <div className="grid grid-cols-5 h-full gap-1">
              <div className="col-span-3 w-full h-full relative overflow-hidden group">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${images[0]})` }}
                ></div>
                <div className="absolute inset-0 bg-[#052659] opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
              <div className="col-span-2 w-full h-full relative overflow-hidden group">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${images[1]})` }}
                ></div>
                <div className="absolute inset-0 bg-[#052659] opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="grid grid-cols-8 h-full gap-1">
              <div className="col-span-3 w-full h-full relative overflow-hidden group">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${images[2]})` }}
                ></div>
                <div className="absolute inset-0 bg-[#052659] opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
              <div className="col-span-5 w-full h-full flex justify-center items-center flex-col bg-gradient-to-b from-[#7DA0CA] via-[#6991BF] to-[#5483B3]">
                <SubHeading heading="Gallery" className="!text-c2 text-xl md:text-4xl sm:text-3xl xs:text-2xl" />
                <p className="text-white uppercase font-bold">Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (width > 640 && width <= 1024) {
    return (
      <section className="min-h-screen bg-c1 flex items-center justify-center px-10 md:px-20 py-8">
        <div className="grid grid-rows-8 h-screen w-screen gap-1">
          <div className="row-span-3 grid grid-cols-3 gap-1">
            {[0, 1, 2].map((index) => (
              <div className="w-full h-full relative overflow-hidden group" key={index}>
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${images[index]})` }}
                ></div>
                <div className="absolute inset-0 bg-[#052659] opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="row-span-5 grid grid-rows-2 gap-1">
            <div className="grid grid-cols-5 h-full gap-1">
              <div className="col-span-3 w-full h-full relative overflow-hidden group">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${images[0]})` }}
                ></div>
                <div className="absolute inset-0 bg-[#052659] opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
              <div className="col-span-2 w-full h-full relative overflow-hidden group">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${images[1]})` }}
                ></div>
                <div className="absolute inset-0 bg-[#052659] opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="grid grid-cols-8 h-full gap-1">
              <div className="col-span-3 w-full h-full relative overflow-hidden group">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${images[2]})` }}
                ></div>
                <div className="absolute inset-0 bg-[#052659] opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
              <div className="col-span-5 w-full h-full flex justify-center items-center flex-col bg-gradient-to-b from-[#7DA0CA] via-[#6991BF] to-[#5483B3]">
                <SubHeading heading="Gallery" className="!text-c2 text-xl md:text-4xl sm:text-3xl xs:text-2xl" />
                <p className="text-white uppercase font-bold">Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (width <= 640) {
    return (
      <section className="min-h-dvh w-dvw bg-c1 flex flex-col items-center justify-start gap-6 px-6 py-8">
        <SectionHeading heading="Gallery" />
        <div className="w-full flex flex-col items-center gap-4">
          {images.map((image: string, index: number) => (
            <div
              className="w-full h-60 relative bg-cover bg-no-repeat rounded-md"
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </section>
    );
  } else {
    return null; // Fallback case
  }
}

import { images } from "../components/GalleryImages";

export default function GallerySection() {
  return (
    <section className="w-dvw min-h-dvh bg-c1 flex items-center justify-center p-4">
      <div className="w-full md:w-4/5 h-full md:h-4/5 grid grid-cols-5 gap-4">
        <div className="col-span-1 grid grid-rows-3 gap-4">
          <div className="w-full">
            <img src={images[0]} alt="" className="w-full h-full" />
          </div>
          <div className="w-full">
            <img src={images[1]} alt="" className="w-full h-full" />
          </div>
          <div className="w-full">
            <img src={images[2]} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="col-span-4 grid-rows-2">
          <div className="row-span-1 grid grid-cols-4 gap-4">
            <div className="col-span-3 w-full h-full">
              <img src={images[3]} alt="" className="w-full" />
            </div>
            <div className="col-span-1 w-full h-full">
              <img src={images[4]} alt="" className="w-full" />
            </div>
          </div>
          <div className="row-span-1 grid grid-cols-4 gap-4">
            <div className="col-span-1 w-full">
              <img src={images[5]} alt="" className="w-full" />
            </div>
            <div className="row-span-3 bg-c3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

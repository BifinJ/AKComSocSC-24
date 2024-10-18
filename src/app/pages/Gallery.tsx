import { images } from "../components/galleryImages";

export default function GallerySection() {
  return (
    <section className="min-h-screen bg-c1 flex items-center justify-center px-36 py-8">
      <div className="grid grid-cols-5 h-screen w-screen gap-1">
        <div className="col-span-1 grid grid-rows-3 gap-1">
          <div className="bg-red-500 w-full h-full"></div>
          <div className="bg-blue-500 w-full h-full"></div>
          <div className="bg-green-500 w-full h-full"></div>
        </div>

        <div className="col-span-4 grid grid-rows-2 gap-1">
          <div className="grid grid-cols-5 h-full gap-1">
            <div className="bg-yellow-500 col-span-3 w-full h-full"></div>
            <div className="bg-purple-500 col-span-2 w-full h-full"></div>
          </div>

          <div className="grid grid-cols-8 h-full gap-1">
            <div className="bg-pink-500 col-span-3 w-full h-full"></div>
            <div className="bg-indigo-500 col-span-5 w-full h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

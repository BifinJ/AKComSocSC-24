import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Registration from "./pages/Registration";
import GallerySection from "./pages/Gallery";
import Sponsors from "./pages/Sponsors";
import Workshop from "./pages/Workshop";
import Talksession from "./pages/TalkSession";
/* import Preloader from "./components/Preloader"; */

export default function Home() {
  return (
    <>
     {/*  <Preloader/> */}
      <Header />
      <Hero />
      <About />
      <Sponsors />
      <Workshop />
      <Talksession />
      {/* <Timeline /> */}
      <GallerySection />
      <Registration />
      <Contact />
      <Footer />
    </>
  );
}

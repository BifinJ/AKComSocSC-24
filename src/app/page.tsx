import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Registration from "./pages/Registration";
import GallerySection from "./pages/Gallery";
import Sponsors from "./pages/Sponsors";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Sponsors />
      {/* <Timeline /> */}
      <GallerySection />
      <Registration />
      <Contact />
      <Footer />
    </>
  );
}

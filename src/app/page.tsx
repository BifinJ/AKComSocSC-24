import Header from "./components/Header";
import About from "./pages/About";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <About />
      <Footer />
    </>
  );
}

import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CTA />
      <Footer />
    </>
  );
}

import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Booking from "./components/booking/Booking";
import Gallery from "./components/gallery/Gallery";
import Categories from "./components/categories/Categories";
import Facilities from "./components/facilities/Facilities";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Booking />
      <About />
      <Categories />
      <Facilities />
      <Gallery />
      <CTA />
      <Footer />
    </>
  );
}

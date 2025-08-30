import VillaCategory1 from "../../assets/images/villa-category1.png";
import VillaCategory2 from "../../assets/images/villa-category2.png";
import VillaCategory3 from "../../assets/images/villa-category3.png";
import Decoration from "../../assets/images/decoration1.svg";
import Card from "./Card";

const villaCategories = [
  {
    image: VillaCategory1,
    title: "4 Bedroom villa",
    facilities: "Wifi provide, TV & Karaoke, Kitchen, Swimming pool",
    beds: "4",
    guests: "8",
    price: "Rp 3.749.000",
    bgCard: "bg-white",
  },
  {
    image: VillaCategory2,
    title: "Joglo house",
    facilities: "Wifi provide, TV & Karaoke, Kitchen, Swimming pool",
    beds: "4",
    guests: "4",
    price: "Rp 3.749.000",
    bgCard: "bg-[#106A64]",
  },
  {
    image: VillaCategory3,
    title: "Kudus house",
    facilities: "Wifi provide, TV & Karaoke, Kitchen",
    beds: "4",
    guests: "4",
    price: "Rp 3.999.000",
    bgCard: "bg-white",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="mt-12 mb-0 lg:my-39 scroll-mt-[30px]">
      <div className="relative max-w-[1110px] mx-auto px-5">
        <img src={Decoration} alt="decoration" className="hidden md:block absolute top-8 left-0 -z-1" />
        <h1 className="mb-4 lg:mb-12 md:text-center text-black lg:text-[40px] font-medium md:font-semibold leading-5 lg:leading-[44px] tracking-[-0.011em] lg:tracking-[-0.023em]">
          Our choise of <span className="text-[#106A64]">Villa Studios</span>
        </h1>

        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 justify-between md:gap-6">
          {villaCategories.map((villa, i) => (
            <Card key={i} bgCard={villa.bgCard} image={villa.image} title={villa.title} facilities={villa.facilities} beds={villa.beds} guests={villa.guests} price={villa.price} />
          ))}
        </div>

        <div className="grid grid-cols-2 md:hidden gap-6">
          {villaCategories.slice(0, 2).map((villa, i) => (
            <Card key={i} bgCard={villa.bgCard} image={villa.image} title={villa.title} facilities={villa.facilities} beds={villa.beds} guests={villa.guests} price={villa.price} />
          ))}
        </div>

        <a href="#" className="flex w-max mx-auto mt-6 md:mt-12 bg-[#F1F6F6] px-8 md:px-6 py-[10px] md:py-3 text-xs md:text-xl md:rounded-[5px] text-[#106A64] hover:text-[#F1F6F6] hover:bg-[#106A64] transition duration-300">
          Load More
        </a>
      </div>
    </section>
  );
}

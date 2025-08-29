export default function Hero() {
  return (
    <section id="hero" className="h-screen max-h-[966px] w-full bg-cover bg-center bg-[url(/src/assets/images/hero.png)]">
      <div className="max-w-[1110px] mx-auto px-5 flex items-center h-full">
        <div className="max-w-2xl">
          <h1 className="mx-auto w-full max-w-[212px] md:max-w-full text-center md:text-left text-xl md:text-[40px] font-bold leading-[28px] md:leading-[60px] tracking-[-0.023em]">Make your comfort is our happiness</h1>
          <p className="mt-4 text-center md:text-left text-sm md:text-xl md:leading-[28px] md:tracking-[-0.012em]">Studio villa made of bamboo, located near the top of Mount Geulis with a stunning 180 degree bird’s eye view.</p>
          <a href="#categories" className="hidden md:inline-block mt-6 bg-[#F1F6F6] px-6 py-3 text-xl rounded-[5px] text-[#106A64] hover:text-[#F1F6F6] hover:bg-[#106A64] transition duration-300">
            Explore Rooms
          </a>
          <div className="flex items-center flex-col">
            <a href="#" className="w-[190px] md:hidden mt-6 inline-block bg-[#106A64] px-6 py-3 text-center text-xs text-[#F1F6F6] hover:text-[#106A64] hover:bg-[#F1F6F6] transition duration-300">
              Book Now
            </a>
            <a href="#" className="w-[190px] md:hidden mt-6 inline-block bg-[#F1F6F6] px-6 py-3 text-center text-xs text-[#106A64] hover:text-[#F1F6F6] hover:bg-[#106A64] transition duration-300">
              Explore room
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

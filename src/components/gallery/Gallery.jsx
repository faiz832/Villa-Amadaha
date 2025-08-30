import BorderGallery from "../../assets/images/border-gallery.svg";
import Gallery1 from "../../assets/images/gallery1.png";
import Gallery2 from "../../assets/images/gallery2.png";
import Gallery3 from "../../assets/images/gallery3.png";

export default function Gallery() {
  return (
    <section id="gallery" className="relative my-12 lg:my-39 scroll-mt-[30px]">
      <div className="hidden lg:block absolute bg-[#F1F6F6] w-[811px] h-[474px] bottom-[-73px] left-0 z-[-1]"></div>
      <div className="relative w-full max-w-[1110px] mx-auto px-5">
        <h1 className="mb-6 md:mb-8 lg:mb-12 text-center text-black md:text-2xl lg:text-[40px] font-medium md:font-semibold leading-5 lg:leading-[44px] tracking-[-0.011em] lg:tracking-[-0.023em]">
          Our{" "}
          <span className="relative text-[#106A64]">
            <img src={BorderGallery} alt="border gallery" className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            Gallery
          </span>
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-4 md:gap-6">
          {/* Foto kiri besar */}
          <div className="col-span-2 md:col-span-1 w-full min-h-[162px] md:h-[515px]">
            <div className="w-full h-full">
              <img src={Gallery1} alt="Big view" className="w-full h-full object-cover rounded-sm" />
            </div>
          </div>

          {/* Foto kanan */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-2 md:gap-[18px]">
            <div className="w-full h-full">
              <img src={Gallery2} alt="Resort" className="w-full h-full object-cover rounded-sm" />
            </div>

            <div className="w-full h-full relative">
              <img src={Gallery3} alt="Pool" className="w-full h-full object-cover rounded-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white tracking-[-0.021em] hover:underline cursor-pointer text-[10px] md:text-base leading-4 md:leading-normal">More photos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

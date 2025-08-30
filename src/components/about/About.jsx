import Decoration from "../../assets/images/decoration1.svg";
import AboutImage from "../../assets/images/about.png";

export default function About() {
  return (
    <section id="about" className="mt-39 scroll-mt-[30px]">
      <div className="relative max-w-[1110px] mx-auto px-5">
        <img src={Decoration} alt="about decoration" className="hidden md:block absolute top-5 right-18 -z-1" />
        <h1 className="mb-4 md:mb-12 lg:mb-32 text-[#0A0A0A] md:text-2xl lg:text-[40px] font-semibold leading-5 lg:leading-[44px] tracking-[-0.011em] lg:tracking-[-0.023em]">
          About Villa <span className="text-[#106A64]">Amadaha</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-[122px]">
          <div className="relative w-full max-w-[368px] aspect-video lg:aspect-square">
            <img src={AboutImage} alt="about villa amadaha" className="w-full h-full object-cover relative z-10" />
            <div className="hidden md:block absolute top-[14px] left-[14px] w-full h-full border border-[#106A64] z-0"></div>
          </div>

          <div className="text-[#0A0A0A] flex flex-col justify-between gap-4 md:my-5">
            <p className="text-sm md:text-xl font-normal leading-5 md:leading-[28px] tracking-[-0.006em] md:tracking-[-0.012em]">
              Villa Amadaha consist of Two Luxury Villas and one Traditional Javanese House surrounded by a tranquil rain forest setting, traditional Indonesian houses anda a farm overlooking the area.
            </p>

            <div className="flex flex-row gap-[46px]">
              <div className="">
                <h3 className="text-xl md:text-[36px] font-medium leading-[44px] tracking-[-0.022em]">
                  +6 <span className="text-[#106A64] text-base md:text-2xl font-medium leading-[44px] tracking-[-0.022em]">/ Room</span>
                </h3>
                <p className="text-[#404040] text-base md:text-xl font-normal leading-5 md:leading-7 tracking-[-0.011em] md:tracking-[-0.012em]">Room options</p>
              </div>
              <div className="">
                <h3 className="text-xl md:text-[36px] font-medium leading-[44px] tracking-[-0.022em]">
                  +2 <span className="text-[#106A64] text-base md:text-2xl font-medium leading-[44px] tracking-[-0.022em]">/ Facilities</span>
                </h3>
                <p className="text-[#404040] text-base md:text-xl font-normal leading-5 md:leading-7 tracking-[-0.011em] md:tracking-[-0.012em]">Facilities available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

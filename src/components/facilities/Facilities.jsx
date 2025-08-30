import Facility1 from "../../assets/images/facility1.png";
import Facility2 from "../../assets/images/facility2.png";
import Decoration from "../../assets/images/decoration1.svg";

export default function Facilities() {
  return (
    <section id="facility" className="relative pt-12 pb-0 lg:pb-39 scroll-mt-[100px] overflow-hidden">
      <div className="hidden lg:block absolute bottom-18 right-0 -z-1 w-[576px] h-[324px] bg-[#F1F6F6]"></div>
      <img src={Decoration} alt="decoration" className="sm:hidden absolute top-9 -right-7 -z-1" />
      <div className="relative max-w-[1110px] mx-auto px-5">
        <img src={Decoration} alt="decoration" className="hidden lg:block absolute -top-20 -left-8 -z-1" />
        <img src={Decoration} alt="decoration" className="hidden lg:block absolute -bottom-15 left-[45%] -translate-x-1/2 -z-1" />
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-14">
          <div className="">
            <h1 className="text-black text-center lg:text-left lg:text-[40px] leading-5 lg:leading-[60px] font-semibold tracking-[-0.011em] lg:tracking-[-0.023em] max-w-[169px] lg:max-w-[412px] mx-auto mb-4 lg:mb-6">
              Various <span className="text-[#106A64]">facilities</span> that you can enjoy
            </h1>
            <p className="text-[#9E9E9E] text-center lg:text-left text-sm lg:text-xl leading-5 lg:leading-7 tracking-[-0.006em] lg:tracking-[-0.012em] max-w-[317px] lg:max-w-[384px] mx-auto lg:mx-0 mb-4 lg:mb-8">
              We bring you together with your dream holiday
            </p>
            <a href="#" className="hidden lg:flex items-center justify-center max-w-[191px] bg-[#106A64] text-white py-4 px-5 rounded-md text-xl leading-7 tracking-[-0.012em] hover:bg-[#0d5751] transition duration-300">
              Explore
            </a>
          </div>

          <div className="flex-1 flex justify-between lg:mt-4 gap-5 lg:gap-12">
            <div className="w-full">
              <img src={Facility1} alt="Facility 1" className="w-full object-cover aspect-square" />
            </div>
            <div className="w-full">
              <img src={Facility2} alt="Facility 2" className="w-full object-cover aspect-square" />
            </div>
          </div>

          <a href="#" className="flex justify-center items-center lg:hidden w-full max-w-[144px] bg-[#106A64] py-[10px] px-8 mx-auto mt-6">
            <span className="text-xs">Explore</span>
          </a>
        </div>
      </div>
    </section>
  );
}

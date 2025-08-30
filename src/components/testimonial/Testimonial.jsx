import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import Decoration1 from "../../assets/images/decoration1.svg";
import Decoration2 from "../../assets/images/decoration2.svg";
import Circle from "../../assets/images/circle.svg";
import Quote from "../../assets/images/quote.svg";
import ArrowIcon from "../../assets/icons/arrow-active.svg";
import ArrowDisabledIcon from "../../assets/icons/arrow-disabled.svg";
import Avatar1 from "../../assets/images/avatar-1.png";
import Avatar2 from "../../assets/images/avatar-2.png";
import Avatar3 from "../../assets/images/avatar-3.png";
import Avatar4 from "../../assets/images/avatar-1.png";

const testimonials = [
  {
    id: 1,
    quote: "“The place is nice with a village atmosphere surrounded by trees, really cool”",
    name: "Phillip Press",
    role: "Traveler",
    avatar: Avatar1,
  },
  {
    id: 2,
    quote: "“The rooms are okay, the breakfast is okay, new and traditional menus are added”",
    name: "Tatiana Levin",
    role: "Travel Bloger",
    avatar: Avatar2,
  },
  {
    id: 3,
    quote: "“strategic location, very pleasant at this villa. next time will come back again to spend the night here”",
    name: "Kaiya Vaccaro",
    role: "Digital Nomads",
    avatar: Avatar3,
  },
  {
    id: 4,
    quote: "“The place has magnificent views and peaceful surroundings, perfect for relaxing.”",
    name: "Jasmine Lee",
    role: "Photographer",
    avatar: Avatar4,
  },
];

export default function Testimonial() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const updateNavState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  // Custom Arrow Components (rotate + opacity untuk disabled)
  const ArrowActiveRight = () => <img src={ArrowIcon} alt="Arrow Right" />;

  const ArrowActiveLeft = () => <img src={ArrowIcon} alt="Arrow Left" style={{ transform: "rotate(180deg)" }} />;

  const ArrowDisabledLeft = () => <img src={ArrowDisabledIcon} alt="Arrow Disabled Right" style={{ opacity: 0.4 }} />;

  const ArrowDisabledRight = () => <img src={ArrowDisabledIcon} alt="Arrow Disabled Left" style={{ transform: "rotate(180deg)", opacity: 0.4 }} />;

  return (
    <section id="testimonial" className="text-black pt-12 lg:pt-39 scroll-mt-[30px] overflow-hidden">
      <div className="relative max-w-[1110px] mx-auto px-5">
        <img src={Circle} alt="circle" className="hidden lg:block absolute -top-18 left-8 -z-1" />
        <img src={Quote} alt="quote" className="hidden lg:block absolute -top-6 left-20 -z-1" />
        <img src={Decoration1} alt="decoration" className="hidden lg:block absolute top-22 -right-8 -z-1" />
        <img src={Decoration1} alt="decoration" className="hidden lg:block absolute bottom-0 -left-8 -z-1" />
        <h2 className="relative text-black lg:text-[40px] leading-5 lg:leading-[60px] font-semibold tracking-[-0.011em] lg:tracking-[-0.023em] max-w-[169px] lg:max-w-[412px] lg:ml-[74px]">
          What Our <span className="text-[#106A64]">Customer</span>
          <br />
          Are Saying
          <span>
            <img src={Decoration2} alt="decoration2" className="md:hidden absolute top-5 right-5" />
          </span>
        </h2>

        <div className="relative">
          {/* Arrows */}
          <div className="swiper-navigation absolute md:top-0 md:right-0 flex bottom-0 right-0 md:bottom-auto space-x-3 z-10" style={{ gap: "12px" }}>
            {/* Prev Arrow - arah kiri */}
            <button onClick={() => swiperRef.current?.slidePrev()} disabled={isBeginning} className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center" aria-label="Previous">
              {isBeginning ? <ArrowDisabledLeft /> : <ArrowActiveLeft />}
            </button>

            {/* Next Arrow - arah kanan */}
            <button onClick={() => swiperRef.current?.slideNext()} disabled={isEnd} className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center" aria-label="Next">
              {isEnd ? <ArrowDisabledRight /> : <ArrowActiveRight />}
            </button>
          </div>

          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={updateNavState}
            spaceBetween={30}
            slidesPerView={1}
            navigation={false}
            breakpoints={{ 768: { slidesPerView: 3 } }}
            style={{ paddingTop: "2rem", paddingBottom: "3rem" }}
            allowTouchMove={true}
          >
            {testimonials.map(({ id, quote, name, role, avatar }) => (
              <SwiperSlide key={id}>
                <div className="bg-white p-6 min-h-[240px] flex justify-center items-center shadow-[2px_4px_15px_rgba(0,0,0,0.08)]">
                  <div className="flex flex-col justify-between h-[140px]">
                    <p className="text-sm">{quote}</p>
                    <div className="flex items-center gap-2">
                      <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                      <div className="space-y-1">
                        <p className="text-[#106A64] font-medium text-xs">{name}</p>
                        <p className="text-[#9E9E9E] text-[10px]">{role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .swiper-navigation {
          bottom: 0;
          right: 1rem;
          display: flex;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .swiper-navigation {
            bottom: auto;
            right: 0;
            top: -70px;
            justify-content: flex-start;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}

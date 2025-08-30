export default function Card({ bgCard, image, title, facilities, beds, guests, price }) {
  return (
    <div className={`${bgCard} text-black rounded-[3px] md:rounded-md shadow-[2px_4px_15px_rgba(0,0,0,0.08)] overflow-hidden border border-[#F5F5F5]`}>
      <div className="p-2 md:p-6 flex flex-col gap-2 md:gap-4">
        <div className="relative h-[154px] md:h-[200px] lg:h-[322px]">
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover rounded-[3px] md:rounded-md" />
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <h3 className={`text-[#130F26] md:font-medium text-xs md:text-base md:leading-5 tracking-[-0.011em] ${bgCard === "bg-white" ? "md:text-[#106A64]" : "text-white"}`}>{title}</h3>
          <div className={`hidden md:flex text-xs leading-4 ${bgCard === "bg-white" ? "text-[#0A0A0A]" : "text-white"}`}>
            <p className="w-full max-w-[130px]">Main Facilities</p>
            <p className="">{facilities}</p>
          </div>
          <div className={`hidden md:flex text-xs leading-4 ${bgCard === "bg-white" ? "text-[#616161]" : "text-white"}`}>
            <div className="w-full md:max-w-[90px] lg:max-w-[130px] flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path
                  d="M3.875 8.9375C2.77043 8.9375 1.875 8.04207 1.875 6.9375V3.3125C1.875 2.79473 1.45527 2.375 0.9375 2.375C0.419733 2.375 0 2.79473 0 3.3125V12.6875C0 13.2053 0.419733 13.625 0.9375 13.625C1.45527 13.625 1.875 13.2053 1.875 12.6875C1.875 12.1697 2.29473 11.75 2.8125 11.75H13.1875C13.7053 11.75 14.125 12.1697 14.125 12.6875C14.125 13.2053 14.5447 13.625 15.0625 13.625C15.5803 13.625 16 13.2053 16 12.6875V11.75V10.9375C16 9.83293 15.1046 8.9375 14 8.9375H3.875Z"
                  fill="currentColor"
                />
                <path d="M4.21875 5.1875C3.44209 5.1875 2.8125 5.81709 2.8125 6.59375V8H5.625V6.59375C5.625 5.81709 4.99541 5.1875 4.21875 5.1875Z" fill="currentColor" />
                <path d="M14.5938 5.1875H7.96875C7.19209 5.1875 6.5625 5.81709 6.5625 6.59375V8H16V6.59375C16 5.81709 15.3704 5.1875 14.5938 5.1875Z" fill="currentColor" />
              </svg>
              <span>{beds} Bed</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M11.3337 14V12.6667C11.3337 11.9594 11.0527 11.2811 10.5526 10.781C10.0525 10.281 9.37424 10 8.66699 10H3.33366C2.62641 10 1.94814 10.281 1.44804 10.781C0.947944 11.2811 0.666992 11.9594 0.666992 12.6667V14"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52692 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52692 7.33333 5.99967 7.33333Z"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M15.333 13.9993V12.6659C15.3326 12.0751 15.1359 11.5011 14.7739 11.0341C14.4119 10.5672 13.9051 10.2336 13.333 10.0859" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M10.667 2.08594C11.2406 2.2328 11.749 2.5664 12.1121 3.03414C12.4752 3.50188 12.6722 4.07716 12.6722 4.66927C12.6722 5.26138 12.4752 5.83666 12.1121 6.3044C11.749 6.77214 11.2406 7.10574 10.667 7.2526"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{guests} Persons</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className={`text-[#130F26] font-medium text-sm md:text-xl md:leading-7 tracking-[-0.006em] md:tracking-[-0.017em] ${bgCard === "bg-white" ? "md:text-[#106A64]" : "text-white"}`}>
              {price} <span className={`hidden md:inline-block text-sm leading-5 tracking-[-0.006em] ${bgCard === "bg-white" ? "text-[#616161]" : "text-white"}`}>/night</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

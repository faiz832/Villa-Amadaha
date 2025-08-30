export default function Card({ bgCard, image, title, facilities, beds, guests, price }) {
  return (
    <div className={`${bgCard} text-black rounded-[3px] md:rounded-md shadow-[2px_4px_15px_rgba(0,0,0,0.08)] overflow-hidden border border-[#F5F5F5]`}>
      <div className="p-2 md:p-6 flex flex-col gap-2 md:gap-4">
        <div className="relative h-[154px] md:h-[322px]">
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover rounded-[3px] md:rounded-md" />
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <h3 className={`text-[#130F26] md:font-medium text-xs md:text-base md:leading-5 tracking-[-0.011em] ${bgCard === "bg-white" ? "md:text-[#106A64]" : "text-white"}`}>{title}</h3>
          <div className={`hidden md:flex text-xs leading-4 ${bgCard === "bg-white" ? "text-[#0A0A0A]" : "text-white"}`}>
            <p className="w-full max-w-[130px]">Main Facilities</p>
            <p className="">{facilities}</p>
          </div>
          <div className={`hidden md:flex text-xs leading-4 ${bgCard === "bg-white" ? "text-[#616161]" : "text-white"}`}>
            <div className="w-full max-w-[130px] flex items-center space-x-2">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path
                  d="M3.875 8.9375C2.77043 8.9375 1.875 8.04207 1.875 6.9375V3.3125C1.875 2.79473 1.45527 2.375 0.9375 2.375C0.419733 2.375 0 2.79473 0 3.3125V12.6875C0 13.2053 0.419733 13.625 0.9375 13.625C1.45527 13.625 1.875 13.2053 1.875 12.6875C1.875 12.1697 2.29473 11.75 2.8125 11.75H13.1875C13.7053 11.75 14.125 12.1697 14.125 12.6875C14.125 13.2053 14.5447 13.625 15.0625 13.625C15.5803 13.625 16 13.2053 16 12.6875V11.75V10.9375C16 9.83293 15.1046 8.9375 14 8.9375H3.875Z"
                  fill="currentColor"
                />
                <path d="M4.21875 5.1875C3.44209 5.1875 2.8125 5.81709 2.8125 6.59375V8H5.625V6.59375C5.625 5.81709 4.99541 5.1875 4.21875 5.1875Z" fill="currentColor" />
                <path d="M14.5938 5.1875H7.96875C7.19209 5.1875 6.5625 5.81709 6.5625 6.59375V8H16V6.59375C16 5.81709 15.3704 5.1875 14.5938 5.1875Z" fill="currentColor" />
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

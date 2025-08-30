import { useState, useEffect, useRef } from "react";
import ChevronDown2 from "/src/assets/icons/chevron-down2.svg";
import Calendar from "/src/assets/icons/calendar.svg";

export default function BookingForm({ selectedRoom, setSelectedRoom, checkIn, setCheckIn, checkOut, setCheckOut, villaOptions, getTodayDate, getMinCheckOutDate, formatDate }) {
  const [roomOpen, setRoomOpen] = useState(false);

  const roomRef = useRef(null);
  const checkInDateRef = useRef(null);
  const checkOutDateRef = useRef(null);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roomRef.current && !roomRef.current.contains(event.target)) {
        setRoomOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle room toggle
  const handleRoomToggle = () => {
    setRoomOpen(!roomOpen);
  };

  // Handle check in click - directly trigger date picker
  const handleCheckInClick = () => {
    if (checkInDateRef.current) {
      checkInDateRef.current.showPicker();
    }
  };

  // Handle check out click - directly trigger date picker
  const handleCheckOutClick = () => {
    if (checkOutDateRef.current) {
      checkOutDateRef.current.showPicker();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-12 w-full lg:w-auto px-2 lg:px-0 relative">
      {/* Room */}
      <div ref={roomRef} className="py-3 px-3 md:px-0 flex items-center justify-between gap-6 w-full lg:w-[150px] border-b border-[#9E9E9E] lg:border-0 cursor-pointer relative" onClick={handleRoomToggle}>
        <span className="text-[#0A0A0A] text-sm md:text-base leading-5 tracking-[-0.006em] truncate">{selectedRoom}</span>
        <img src={ChevronDown2} alt="chevron" className="w-4 h-4" />

        {/* Dropdown room */}
        {roomOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-b-md shadow-md animate-fadeIn w-full md:w-70 overflow-hidden z-20">
            {villaOptions.map((villa) => (
              <div
                key={villa.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedRoom(villa.name);
                  setRoomOpen(false);
                }}
                className="text-[#0A0A0A] px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex justify-between items-center gap-2"
              >
                <span>{villa.name}</span>
                <span className="text-xs text-[#777777]">{villa.available ? "Available" : "Not Available"}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Check in - Desktop */}
      <div className="hidden lg:flex items-center pl-12 border-l border-[#9E9E9E] cursor-pointer relative" onClick={handleCheckInClick}>
        <div className="py-1 flex items-center gap-6 md:w-[150px]">
          <img src={Calendar} alt="calendar" className="w-4 h-4" />
          <span className="text-[#0A0A0A] text-sm md:text-base">{checkIn ? formatDate(checkIn) : "Check in"}</span>
        </div>
        {/* Hidden date input */}
        <input ref={checkInDateRef} type="date" value={checkIn} min={getTodayDate()} onChange={(e) => setCheckIn(e.target.value)} className="absolute opacity-0 pointer-events-none" />
      </div>

      {/* Check out - Desktop */}
      <div className="hidden lg:flex items-center pl-12 border-l border-[#9E9E9E] cursor-pointer relative" onClick={handleCheckOutClick}>
        <div className="py-1 flex items-center gap-6 md:w-[150px]">
          <img src={Calendar} alt="calendar" className="w-4 h-4" />
          <span className="text-[#0A0A0A] text-sm md:text-base">{checkOut ? formatDate(checkOut) : "Check out"}</span>
        </div>
        {/* Hidden date input */}
        <input ref={checkOutDateRef} type="date" value={checkOut} min={getMinCheckOutDate()} onChange={(e) => setCheckOut(e.target.value)} className="absolute opacity-0 pointer-events-none" />
      </div>

      {/* Mobile check in & out */}
      <div className="overflow-hidden grid lg:hidden grid-cols-2 w-full my-3">
        <div className="py-2 px-3 flex items-center gap-2 sm:gap-6 cursor-pointer relative" onClick={handleCheckInClick}>
          <img src={Calendar} alt="calendar" className="w-4 h-4" />
          <span className="text-[#0A0A0A] text-sm md:text-base leading-5 tracking-[-0.006em]">{checkIn ? formatDate(checkIn) : "Check in"}</span>
          {/* Hidden date input for mobile */}
          <input ref={checkInDateRef} type="date" value={checkIn} min={getTodayDate()} onChange={(e) => setCheckIn(e.target.value)} className="absolute opacity-0 pointer-events-none" />
        </div>

        <div className="py-2 px-3 flex items-center gap-2 sm:gap-6 border-l border-[#9E9E9E] pl-5 cursor-pointer relative" onClick={handleCheckOutClick}>
          <img src={Calendar} alt="calendar" className="w-4 h-4" />
          <span className="text-[#0A0A0A] text-sm md:text-base leading-5 tracking-[-0.006em]">{checkOut ? formatDate(checkOut) : "Check out"}</span>
          {/* Hidden date input for mobile */}
          <input ref={checkOutDateRef} type="date" value={checkOut} min={getMinCheckOutDate()} onChange={(e) => setCheckOut(e.target.value)} className="absolute opacity-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

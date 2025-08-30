import { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import Modal from "./Modal";

export default function Booking() {
  const [selectedRoom, setSelectedRoom] = useState("Room");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [availabilityResult, setAvailabilityResult] = useState(null);

  // Data villa dengan status availability
  const villaOptions = [
    { name: "4 Bedroom Villa", available: true },
    { name: "2 Bedroom Villa", available: false },
    { name: "Joglo House", available: true },
    { name: "Bamboo Studio", available: true },
    { name: "Bamboo House", available: false },
  ];

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  // Get minimum check out date (day after check in)
  const getMinCheckOutDate = () => {
    if (!checkIn) return getTodayDate();
    const checkInDate = new Date(checkIn);
    checkInDate.setDate(checkInDate.getDate() + 1);
    return checkInDate.toISOString().split("T")[0];
  };

  // Format date to DD/MM/YYYY
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getFullYear()}`;
  };

  // Reset check out if check in changes and check out is before new check in
  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      if (checkOutDate <= checkInDate) {
        setCheckOut("");
      }
    }
  }, [checkIn]);

  // Handle check availability
  const handleCheckAvailability = () => {
    if (!selectedRoom || selectedRoom === "Room") {
      alert("Please select a room");
      return;
    }
    if (!checkIn) {
      alert("Please select check-in date");
      return;
    }
    if (!checkOut) {
      alert("Please select check-out date");
      return;
    }

    const selectedVilla = villaOptions.find((villa) => villa.name === selectedRoom);
    setAvailabilityResult(selectedVilla);
    setShowModal(true);

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  // Handle close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setAvailabilityResult(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section id="booking" className="relative z-50 scroll-mt-[100px]">
        <div className="absolute top-[-50px] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full">
          <div className="max-w-[1110px] mx-auto px-5 flex items-center justify-center">
            <div className="bg-white md:rounded-md w-full shadow-[4px_8px_15px_rgba(0,0,0,0.05)] relative">
              <div className="md:p-4 lg:p-[30px] lg:px-0 flex flex-col lg:flex-row items-center justify-center lg:gap-12">
                <BookingForm
                  selectedRoom={selectedRoom}
                  setSelectedRoom={setSelectedRoom}
                  checkIn={checkIn}
                  setCheckIn={setCheckIn}
                  checkOut={checkOut}
                  setCheckOut={setCheckOut}
                  villaOptions={villaOptions}
                  getTodayDate={getTodayDate}
                  getMinCheckOutDate={getMinCheckOutDate}
                  formatDate={formatDate}
                />

                {/* Button */}
                <button
                  onClick={handleCheckAvailability}
                  className="w-full lg:w-auto bg-[#106A64] hover:bg-[#0d5751] transition-colors md:rounded-md py-[10px] px-8 lg:px-6 lg:py-4 text-xs lg:text-xl lg:leading-[28px] lg:tracking-[-0.012em] text-white cursor-pointer"
                >
                  Check availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal onClose={handleCloseModal} showModal={showModal} availabilityResult={availabilityResult} selectedRoom={selectedRoom} checkIn={checkIn} checkOut={checkOut} formatDate={formatDate} />
    </>
  );
}

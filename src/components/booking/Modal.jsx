export default function Modal({ showModal, availabilityResult, selectedRoom, checkIn, checkOut, formatDate, onClose }) {
  if (!showModal) return null;

  return (
    <div className="text-black fixed inset-0 bg-black/60 flex items-center justify-center z-[100]">
      <div className="bg-white rounded-lg p-6 max-w-[344px] w-full mx-4 relative animate-fadeIn">
        {availabilityResult && (
          <div className="">
            {availabilityResult.available ? (
              <div className="flex flex-col items-center gap-6">
                <h2 className="text-2xl font-semibold">Available</h2>
                <p className="text-xs md:text-sm lg:text-md leading-[18px] text-center text-[#777777] max-w-[300px]">
                  {selectedRoom} on {formatDate(checkIn)} until {formatDate(checkOut)} is available.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-6">
                <h2 className="text-2xl font-semibold">Not Available</h2>
                <p className="text-xs md:text-sm lg:text-md leading-[18px] text-center text-[#777777] max-w-[300px]">
                  {selectedRoom} on {formatDate(checkIn)} until {formatDate(checkOut)} is not available.
                </p>
              </div>
            )}
          </div>
        )}
        <button onClick={onClose} className="w-full mt-6 rounded-md py-2 px-4 bg-[#106A64] hover:bg-[#0d5751] transition duration-300 text-white cursor-pointer">
          <span className="text-sm font-semibold">Close</span>
        </button>
      </div>
    </div>
  );
}

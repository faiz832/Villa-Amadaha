import { useState, useEffect, useRef } from "react";
import MenuIcon from "../../assets/icons/menu.svg";
import ChevronDown from "../../assets/icons/chevron-down.svg";
import ChevronRight from "../../assets/icons/chevron-right.svg";

const menu = [
  { name: "About", href: "#about" },
  { name: "Villa Categories", href: "#categories", hasSubmenu: true },
  { name: "Gallery", href: "#gallery" },
];

const villaCategories = ["4 Bedroom villa", "2 Bedroom villa", "Joglo house", "Kudus house", "Bamboo house", "Bamboo studio"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVillaOpen, setIsVillaOpen] = useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [isVillaMobileOpen, setIsVillaMobileOpen] = useState(false);

  const menuRef = useRef(null);
  const villaRef = useRef(null);
  const mobileRef = useRef(null);

  // 🔹 Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target) && villaRef.current && !villaRef.current.contains(e.target) && mobileRef.current && !mobileRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setIsVillaOpen(false);
        setIsMenuMobileOpen(false);
        setIsVillaMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1110px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* 🔹 WEB */}
        <div className="hidden md:flex items-center gap-10 relative">
          {/* Web Burger */}
          <div ref={menuRef} className="relative">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsVillaOpen(false);
              }}
            >
              <img src={MenuIcon} alt="menu" className="w-6 h-6 cursor-pointer" />
            </button>

            {isMenuOpen && (
              <div className="absolute top-8 left-0 bg-white rounded-r-md rounded-b-md py-2 w-40 animate-fadeIn">
                {menu.map((item, i) => (
                  <div key={i} className="hover:bg-[#CFE1E04D] overflow-hidden">
                    <a href={item.href} className="text-black block mx-4 py-2 border-b border-[#CFE1E04D]">
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Web Villa Category */}
          <div ref={villaRef} className="relative">
            <button
              onClick={() => {
                setIsVillaOpen(!isVillaOpen);
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-3 cursor-pointer"
            >
              Villa Category
              <img src={ChevronDown} alt="dropdown" className="w-2 h-2" />
            </button>

            {isVillaOpen && (
              <div className="absolute top-8 left-0 bg-white rounded-r-md rounded-b-md py-2 w-56 animate-fadeIn">
                {villaCategories.map((item, i) => (
                  <div key={i} className="hover:bg-[#CFE1E04D] overflow-hidden">
                    <a href="#" className="text-black block mx-4 py-2 border-b border-[#CFE1E04D]">
                      {item}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 🔹 MOBILE */}
        <div ref={mobileRef} className="md:hidden relative">
          <button
            onClick={() => {
              setIsMenuMobileOpen(!isMenuMobileOpen);
              setIsVillaMobileOpen(false);
            }}
          >
            <img src={MenuIcon} alt="menu" className="w-6 h-6 cursor-pointer" />
          </button>

          {isMenuMobileOpen && (
            <div className="text-black absolute top-8 left-0 bg-white p-2 w-max shadow-md animate-fadeIn">
              {menu.map((item, i) => (
                <div key={i} className="overflow-hidden">
                  {item.hasSubmenu ? (
                    <>
                      <button onClick={() => setIsVillaMobileOpen(!isVillaMobileOpen)} className="w-full flex justify-between items-center text-xs text-left py-2 border-b border-[#CFE1E04D] hover:bg-[#CFE1E04D]">
                        {item.name}
                        <img src={ChevronRight} alt="chevron" className="ml-2 w-3 h-3" />
                      </button>
                      {isVillaMobileOpen && (
                        <div className="absolute top-10 left-full ml-2 bg-white p-2 w-30 shadow-md animate-fadeIn">
                          {villaCategories.map((villa, j) => (
                            <a key={j} href="#" className="text-xs block py-2 border-b border-[#CFE1E04D] hover:bg-[#CFE1E04D]">
                              {villa}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a href={item.href} className="text-xs block py-2 border-b border-[#CFE1E04D] hover:bg-[#CFE1E04D]">
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 🔹 Right Section */}
        <div className="hidden md:flex items-center gap-12">
          <a href="#contact" className="leading-tight tracking-[-0.011em]">
            Contact us
          </a>
          <button className="leading-tight tracking-[-0.011em] py-2 px-8 bg-[#106A64] text-white">Login</button>
        </div>
      </div>
    </nav>
  );
}

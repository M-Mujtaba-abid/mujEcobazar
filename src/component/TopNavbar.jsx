import React from "react";
import MapPin from "../assets/MapPin.png";

const TopNavbar = () => {
  return (
    <>
      {/* Main Navbar */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-1 px-4 md:px-14">
        {/* Left Div */}
        <div className="flex gap-2 items-center text-sm">
          <img src={MapPin} alt="Location" className="w-4 h-4" />
          <div>199 Nabi Park Ravi Road, Lahore</div>
        </div>

        {/* Right Div */}
        <div className="mt-2 md:mt-0">
          <ul className="flex flex-wrap gap-3 items-center text-sm">
            <li>Eng</li>
            <li>USD</li>
            <div className="hidden md:block border-r-2 border-gray-400 h-6" />
            <li>Sign In / Sign Up</li>
          </ul>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t w-full mt-1"></div>
    </>
  );
};

export default TopNavbar;

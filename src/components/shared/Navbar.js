import React, { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  // Active Or Inactive Section CSS Classes
  const active = "px-3 text-indigo-500 hover:text-indigo-600 flex";
  const inActive = "px-3 hover:text-indigo-600 flex";

  // Mobile View Toggle Button CSS Classes
  const mobileNavClicked =
    "flex flex-col items-center md:hidden bg-white rounded-b-xl container mx-auto pb-4 shadow-xl text-xl";
  const mobileNavNotClicked = "hidden";

  // Mobile View Toggle Button
  const openClicked = () => {
    setClicked(true);
  };
  const closeClicked = () => {
    setClicked(false);
  };

  const title = "Mehedi Photography";

  return (
    <div className="md:container md:mx-auto md:fixed md:top-0 md:left-0 md:right-0 md:border-b-2">
      <div className="md:flex md:justify-between bg-pink-400 py-2 hidden items-center w-full left-auto right-auto">
        <div className="font-bold text-3xl text-[#2D357D] flex items-center">
          <div className="font-merienda">{title}</div>
        </div>
        <div className="font-bold text-2xl text-[#2D357D] flex items-center">
          <div
            to="/Home"
            className={({ isActive }) => (isActive ? active : inActive)}
          >
            Home
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-white shadow-xl flex justify-between p-4 md:hidden">
        <div>
          <div
            className="font-bold text-xl text-[#2D357D] flex items-center"
            to="/"
          >
            <div className="">{title}</div>
          </div>
        </div>
        <button
          className="flex justify-end"
          onClick={clicked ? closeClicked : openClicked}
        >
          {clicked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      <div className={clicked ? mobileNavClicked : mobileNavNotClicked}>
        <div className="px-3 py-1 text-[#2D357D]">Home</div>
        <div className="px-3 py-1 text-[#2D357D]">Courses</div>
      </div>
    </div>
  );
};

export default Navbar;

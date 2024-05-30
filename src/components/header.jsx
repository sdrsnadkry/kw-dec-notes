import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="flex items-center py-2 px-4 justify-between">
        <img
          src="https://kingswayacademy.io/wp-content/uploads/2020/02/Group-3599.png"
          className="h-[77px] w-[200px]"
        />
        <ul className="hidden lg:flex justify-around flex-1 ">
          <li className="py-2 ">
            <Link to="/">Home</Link>
          </li>
          <li className="py-2 ">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="py-2 ">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>

        <div className="lg:hidden">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            =
          </button>
        </div>
      </div>

      <div className="lg:hidden absolute top-0 left-0 bottom-0 right-0 bg-white">
        <div className="w-full h-full relative">
          <ul className="flex flex-col justify-around items-center flex-1 pt-10">
            <li className="py-6 ">
              <Link to="/">Home</Link>
            </li>
            <li className="py-6 ">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="py-6 ">
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>

          <div className="absolute top-0 right-0">
            <button>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
